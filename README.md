Key Integration Points
Authentication (Login and Register)

Update the back-end API endpoints in src/components/views/AccessView.
Files: LoginForm.vue, RegisterForm.vue.
Use /api/auth/login and /api/auth/register.
Conversation Management

Fetch and display conversations in src/components/views/HomeView/Sidebar/Conversations.
Files: Conversations.vue, ConversationsList.vue.
Use /api/conversations/:userId for fetching conversations.
Messaging

Update message sending and fetching in src/components/views/HomeView/Chat.
Files: Chat.vue, ChatMiddle.vue, ChatBottom.vue.
Use /api/chat/messages/:conversationId for fetching messages and /api/chat/messages for sending messages.
Real-Time Messaging

Connect to WebSocket for real-time updates.
File: Chat.vue.
Use ws://localhost:8080/chat/ws for the WebSocket connection.
