<template>
  <!--custom context menu-->
  <Dropdown
    :close-dropdown="handleCloseContextMenu"
    :handle-click-outside="handleCloseContextMenu"
    :show="show"
    :coordinates="{
      left: props.left + 'px',
      top: props.top + 'px',
    }"
    :position="['top-0']"
  >
    <button
      class="dropdown-link dropdown-link-primary"
      role="menuitem"
      aria-label="энэ зурваст хариулах"
      @click="handleReplyToMessage"
    >
      <ArrowUturnLeftIcon class="h-5 w-5 mr-3" />
      Хариулах
    </button>

    <button
      class="dropdown-link dropdown-link-primary"
      role="menuitem"
      aria-label="энэ мессежийг хуулах"
      @click="handleCloseContextMenu"
    >
      <ClipboardDocumentIcon class="h-5 w-5 mr-3" />
      Хуулах
    </button>

    <button
      class="dropdown-link dropdown-link-primary"
      role="menuitem"
      aria-label="энэ мессежийг тогтооно уу"
      @click="handlePinMessage"
    >
      <BookmarkSquareIcon class="h-5 w-5 mr-3" />
      Дээр
    </button>

    <button
      v-if="props.selected"
      class="dropdown-link dropdown-link-primary"
      role="menuitem"
      aria-label="энэ мессежийн сонголтыг цуцална уу"
      @click="
        () => {
          handleCloseContextMenu();
          props.handleDeselectMessage(props.message.id);
        }"
    >
      <XCircleIcon class="h-5 w-5 mr-3" />
      Deselect
    </button>

    <button
      v-else
      class="dropdown-link dropdown-link-primary"
      role="menuitem"
      aria-label="энэ мессежийг сонгоно уу"
      @click="
        () => {
          handleCloseContextMenu();
          props.handleSelectMessage(props.message.id);
        }
      "
    >
      <CheckCircleIcon class="h-5 w-5 mr-3" />
      Сонгох
    </button>

    <button
      class="dropdown-link dropdown-link-danger"
      role="menuitem"
      aria-label="Зурвас устгах"
      @click="handleCloseContextMenu"
    >
      <TrashIcon class="h-5 w-5 mr-3" />
      Зурвас устгах
    </button>
  </Dropdown>
</template>
<script setup lang="ts">
import type { IConversation, IMessage } from "@src/types";
import { inject } from "vue";

import useStore from "@src/store/store";
import { getConversationIndex } from "@src/utils";

import {
  ArrowUturnLeftIcon,
  BookmarkSquareIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClipboardDocumentIcon,
} from "@heroicons/vue/24/outline";
import Dropdown from "@src/components/ui/navigation/Dropdown/Dropdown.vue";
import DropdownLink from "@src/components/ui/navigation/Dropdown/DropdownLink.vue";

const props = defineProps<{
  message: IMessage;
  show: boolean;
  left: number;
  top: number;
  selected: boolean;
  handleCloseContextMenu: () => void;
  handleSelectMessage: (messageId: number) => void;
  handleDeselectMessage: (messageId: number) => void;
}>();

const store = useStore();



// (event) pin message to conversation
const handlePinMessage = () => {
  props.handleCloseContextMenu();

  if (store.activeConversation) {
    // get the active conversation index in the state store
    let activeConversationIndex = getConversationIndex(store.activeConversation.id);

    if (
      store.conversations &&
      activeConversationIndex !== undefined &&
      activeConversationIndex !== null
    ) {
      // update the conversation in the state store
      store.conversations[activeConversationIndex].pinnedMessage =
        props.message;
      store.conversations[activeConversationIndex].pinnedMessageHidden = false;
    }
  }
};

// (event) select the reply message.
const handleReplyToMessage = () => {
  props.handleCloseContextMenu();

  if (store.activeConversation) {
    // get the active conversation index in the state store
    let activeConversationIndex = getConversationIndex(store.activeConversation.id);

    if (
      store.conversations &&
      activeConversationIndex !== undefined &&
      activeConversationIndex !== null
    ) {
      // update the conversation in the state store
      store.conversations[activeConversationIndex].replyMessage = props.message;
    }
  }
};
</script>
