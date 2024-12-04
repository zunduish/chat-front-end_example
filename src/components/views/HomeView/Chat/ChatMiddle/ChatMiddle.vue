<template>
  <div
    ref="container"
    class="grow px-5 py-5 flex flex-col overflow-y-scroll scrollbar-hidden"
  >
    <div
      v-if="store.status !== 'loading'"
      v-for="(message, index) in store.activeConversation.messages"
      :key="index"
    >
      <TimelineDivider v-if="renderDivider(index, index - 1)" />

      <Message
        :message="message"
        :self="isSelf(message)"
        :follow-up="isFollowUp(index, index - 1)"
        :divider="renderDivider(index, index - 1)"
        :selected="props.selectedMessages.includes(message.id)"
        :handle-select-message="handleSelectMessage"
        :handle-deselect-message="handleDeselectMessage"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IConversation, IMessage } from "@src/types";
import type { Ref } from "vue";

import { inject, onMounted, ref, watch, nextTick } from "vue";

import useStore from "@src/store/store";

import Message from "@src/components/views/HomeView/Chat/ChatMiddle/Message/Message.vue";
import TimelineDivider from "@src/components/views/HomeView/Chat/ChatMiddle/TimelineDivider.vue";

const props = defineProps<{
  handleSelectMessage: (messageId: number) => void;
  handleDeselectMessage: (messageId: number) => void;
  selectedMessages: number[];
}>();

const store = useStore();

const container: Ref<HTMLElement | null> = ref(null);

// Checks whether the previous message was sent by the same user
const isFollowUp = (index: number, previousIndex: number): boolean => {
  if (previousIndex < 0) {
    return false;
  } else {
    const previousSender = store.activeConversation.messages[previousIndex].sender.id;
    const currentSender = store.activeConversation.messages[index].sender.id;
    return previousSender === currentSender;
  }
};

// Checks whether the message is sent by the authenticated user
const isSelf = (message: IMessage): boolean => {
  return Boolean(store.user && message.sender.id === store.user.id);
};

// Checks whether the new message has been sent in a new day or not
const renderDivider = (index: number, previousIndex: number): boolean => {
  if (index === 3) {
    return true;
  } else {
    return false;
  }
};

// Scroll messages to bottom on initial load
onMounted(() => {
  scrollToBottom();
});

// Watch for changes in the message list and scroll to bottom
watch(
  () => store.activeConversation.messages,
  async () => {
    await nextTick(); // Ensure DOM updates are applied before scrolling
    scrollToBottom();
  },
  { deep: true }
);

// Function to scroll to the bottom of the chat container
const scrollToBottom = () => {
  if (container.value) {
    container.value.scrollTop = container.value.scrollHeight;
  }
};
</script>

