import { defineStore } from "pinia";
import { ref, computed, Ref, watch } from "vue";
import axios from "../utils/axios";
import { useRoute } from "vue-router";

import defaults from "@src/store/defaults";
import type {
  IConversation,
  IContactGroup,
  IUser,
  INotification,
  ICall,
  ISettings,
  IEmoji,
} from "@src/types";

const useStore = defineStore("chat", () => {

  const socket = ref<WebSocket | null>(null); // WebSocket reference

  const connectWebSocket = () => {
    if (socket.value && user.value) return; // Prevent multiple connections

    socket.value = new WebSocket("ws://localhost:8021/chat/"+user.value.id); // Replace with your WebSocket URL

    socket.value.onopen = () => {
      console.log("WebSocket connected");

      // Send user ID to register on the server
      if (user.value) {
        socket.value?.send(user.value.id);
      }
    };

    socket.value.onmessage = (event) => {
      const message = JSON.parse(event.data);

      // Update the active conversation or notifications
      if (activeConversation.value && activeConversation.value.id === message.conversation_id) {
        activeConversation.value.messages.push(message);
      } else {
        // Handle notifications for other conversations
        notifications.value.push({
          id: message.id,
          type: "message",
          content: "New message received",
          conversation_id: message.conversation_id,
        });
      }
    };

    socket.value.onclose = () => {
      console.log("WebSocket disconnected");
      socket.value = null;
    };

    socket.value.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };

  const route = useRoute(); // Access the current route
  // Local storage
  const storage = JSON.parse(localStorage.getItem("chat") || "{}");

  // App status refs
  const status = ref("idle");

  // App data refs
  const user: Ref<IUser | undefined> = ref(storage.user);
  const contacts: Ref<IUser[] | undefined> = ref([]);
  const tokenPre = localStorage.getItem("token");
  if (process.env.NODE_ENV === "development") {

    axios.defaults.headers.common["Authorization"] = `Bearer ${tokenPre}`;
  }
  const isAuthenticated = ref(!!tokenPre);
  const conversations: Ref<IConversation[]> = ref( []);
  const notifications: Ref<INotification[]> = ref(defaults.notifications || []);
  const archivedConversations: Ref<IConversation[]> = ref(
    defaults.archive || []
  );
  const calls: Ref<ICall[]> = ref(defaults.calls || []);
  const settings: Ref<ISettings> = ref(
    storage.settings || defaults.defaultSettings
  );
  const activeCall: Ref<ICall | undefined> = ref(defaults.activeCall);
  const recentEmoji: Ref<IEmoji[]> = ref(storage.recentEmoji || []);
  const emojiSkinTone: Ref<string> = ref(storage.emojiSkinTone || "neutral");

  // UI refs
  const activeSidebarComponent: Ref<string> = ref(
    storage.activeSidebarComponent || "messages"
  );

  const conversationOpen: Ref<string | undefined> = ref(
    storage.conversationOpen
  );
  const callMinimized = ref(false);
  const openVoiceCall = ref(false);

  // Contacts grouped alphabetically.
  const contactGroups: Ref<IContactGroup[] | undefined> = computed(() => {
    if (contacts.value) {
      let sortedContacts = [...contacts.value];

      sortedContacts.sort();

      let groups: IContactGroup[] = [];
      let currentLetter: string = "";
      let groupNames: string[] = [];

      for (let contact of sortedContacts) {
        if (contact.first_name[0].toUpperCase() !== currentLetter) {
          currentLetter = contact.first_name[0].toUpperCase();
          groupNames.push(currentLetter);
        }
      }

      for (let groupName of groupNames) {
        let group: IContactGroup = { letter: groupName, contacts: [] };
        for (let contact of sortedContacts) {
          if (contact.first_name[0].toUpperCase() === groupName) {
            group.contacts.push(contact);
          }
        }
        groups.push(group);
      }

      return groups;
    }
  });

  const getStatus = computed(() => status.value);

  const activeConversationId = ref<string | undefined>(route.params.conversation_id as string | undefined);

  // Watch for changes in the route parameter
  watch(
    () => route.params.conversation_id,
    (newId) => {
      activeConversationId.value = newId as string | undefined;
    }
  );

  // Login
  const login = async (login: string, password: string) => {
    try {
      const response = await axios.post("https://api.amjilt.com/main/auth/login", {
      // const response = await axios.post("http://localhost:8003/auth/login", {
        login,
        password,
      });

      if (process.env.NODE_ENV === "development") {
        const token = response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      // Update the store with user data
      user.value = response.data.user;

      contacts.value = response.data.contacts;
      isAuthenticated.value = true;

      // Save to localStorage



      status.value = "loggedIn";

      await fetchData()
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed. Please check your credentials.");
    }
  };


  const getOrCreateConversation = async (otherUserId: string) => {
    try {
      // Call the API to check or create the conversation
      const response = await axios.get(
        `http://localhost:8021/api/conversations/check/${otherUserId}`,
        {
          // Uncomment this if you are using a token for authentication
          // headers: { Authorization: `Bearer ${token.value}` },
          withCredentials: true, // Ensures cookies are sent with the request
        }
      );

      const conversation = response.data;

      // Add the conversation to the store if it doesn't already exist
      const existingConversation = conversations.value.find(
        (c) => c.id === conversation.id
      );

      if (!existingConversation) {
        conversations.value.push(conversation);
      }

      // Set the active conversation ID
      activeConversationId.value = conversation.id;

      return conversation;
    } catch (error) {
      console.error("Failed to get or create conversation:", error);
      throw error;
    }
  };


  const sendMessage = async (
    conversationId: string,
    messageContent: string,
    attachments: any[] = [],
    previewData: any = null
  ) => {
    try {
      // Construct the message payload
      const messagePayload = {
        conversation_id: conversationId,
        content: messageContent,
        attachments,
        preview_data: previewData,
      };

      // If WebSocket is connected, send the message via WebSocket
      if (socket.value && socket.value.readyState === WebSocket.OPEN) {
        socket.value.send(JSON.stringify(messagePayload));
        console.log("Message sent via WebSocket");
      } else {
        // Fall back to the REST API
        console.warn("WebSocket not connected. Falling back to API.");
        const response = await axios.post(
          `http://localhost:8021/chat/message`,
          messagePayload,
          {
            withCredentials: true,
          }
        );

        const newMessage = response.data;

        // Update the local store
        const conversation = conversations.value.find((c) => c.id === conversationId);
        if (conversation) {
          conversation.messages.push(newMessage);
        }

        return newMessage;
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      throw error;
    }
  };

  // Logout
  const logout = () => {
    user.value = undefined;

    isAuthenticated.value = false;

    // Clear localStorage
    localStorage.removeItem("chat");

    status.value = "loggedOut";
  };

  // Check if user is authenticated
  const checkAuthentication = () => {
    isAuthenticated.value = true;
    status.value = "loggedIn";
    // if (token.value) {
    //   isAuthenticated.value = true;
    //   status.value = "loggedIn";
    // } else {
    //   isAuthenticated.value = false;
    //   status.value = "loggedOut";
    // }
  };

  // Fetch all conversations for the logged-in user
  const fetchConversations = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8021/api/conversations/${userId}`,
        // {
        //   headers: { Authorization: `Bearer ${token.value}` },
        // }
      );
      conversations.value = response.data;
    } catch (error) {
      console.error("Failed to fetch conversations:", error);
    }
  };

  const fetchData = async () => {
    status.value = "loading";


    try {


      const response = await axios.get("http://localhost:8021/user/fetch-data", {
        // headers: {
        //   Authorization: `Bearer ${token.value}`,
        // },
      });




      user.value = response.data.user
      conversations.value = response.data.conversations ?? []
      notifications.value =  response.data.notifications ?? []
      contacts.value =  response.data.contacts ?? []
      archivedConversations.value = response.data.archivedConversations ?? []
      status.value = "success"

      localStorage.setItem(
        "chat",
        JSON.stringify({
          user:response.data.user,
          settings: settings.value,
        })
      );


    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  // Create a new conversation
  const createConversation = async (
    name: string,
    isGroup: boolean,
    participants: string[]
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:8021/api/conversations",
        { name, isGroup, participants },
        // { headers: { Authorization: `Bearer ${token.value}` } }
      );
      conversations.value.push(response.data);
    } catch (error) {
      console.error("Failed to create conversation:", error);
    }
  };

  // Add a participant to a conversation
  const addParticipant = async (conversationId: string, userId: string) => {
    try {
      await axios.post(
        `http://localhost:8021/api/conversations/${conversationId}/participants/${userId}`,
        {},
        // { headers: { Authorization: `Bearer ${token.value}` } }
      );
    } catch (error) {
      console.error("Failed to add participant:", error);
    }
  };

  const disconnectWebSocket = () => {
    socket.value?.close();
    socket.value = null;
  };


  // Computed: Active conversation
  const activeConversation = computed(() => {
    if (!activeConversationId.value) return undefined;

    // Search in the main conversations
    const foundConversation = conversations.value.find(
      (conversation) => conversation.id === activeConversationId.value
    );

    if (foundConversation) return foundConversation;

    // If not found, search in archived conversations
    return archivedConversations.value.find(
      (conversation) => conversation.id === activeConversationId.value
    );
  });

  const updateDraftMessage = (draft_message: string) => {
    const index = conversations.value.findIndex(c => c.id === activeConversationId.value);
    if (index >= 0) {
      conversations.value[index].draft_message = draft_message;
    }
  };

  return {
    // Status refs
    status,
    isAuthenticated,
    getStatus,

    // Data refs
    user,
    contacts,
    conversations,
    contactGroups,
    notifications,
    archivedConversations,
    calls,
    settings,
    activeCall,
    recentEmoji,
    emojiSkinTone,

    // UI refs
    activeSidebarComponent,

    conversationOpen,
    callMinimized,
    openVoiceCall,

    // Actions
    login,
    logout,
    checkAuthentication,
    fetchData,

    //  Conversation
    fetchConversations,
    createConversation,
    addParticipant,

    activeConversation,
    updateDraftMessage,
    getOrCreateConversation,
    sendMessage,

    //socket
    connectWebSocket,
    disconnectWebSocket,

  };
});

export default useStore;
