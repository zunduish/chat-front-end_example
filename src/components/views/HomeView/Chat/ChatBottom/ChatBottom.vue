<template>
  <div class="w-full">
    <!--selected reply display-->
    <div
      class="relative transition-all duration-200"
      :class="{ 'pt-[3.75rem]': store.activeConversation?.replyMessage }"
    >
      <ReplyMessage />
    </div>

    <div
      class="h-auto min-h-[5.25rem] p-5 flex items-end"
      v-if="store.status !== 'loading'"
      :class="recording ? ['justify-between'] : []"
    >
      <div class="min-h-[2.75rem]">
        <!--select attachments button-->
        <IconButton
          v-if="!recording"
          class="ic-btn-ghost-primary w-7 h-7 md:mr-5 xs:mr-4"
          title="Сонгох хавсралт горимыг нээх"
          aria-label="Сонгох хавсралт горимыг нээх"
          @click="openAttachmentsModal = true"

        >
          <PaperClipIcon class="w-[1.25rem] h-[1.25rem]" />
        </IconButton>

        <!--recording timer-->
        <p v-if="recording" class="body-1 text-indigo-300">00:11</p>
      </div>

      <!--message textarea-->
      <div class="grow md:mr-5 xs:mr-4 self-end" v-if="!recording">
        <div class="relative">
          <Textarea
            class="max-h-[5rem] pr-[3.125rem] resize-none scrollbar-hidden"
            @value-changed="(newValue: string) => (value = newValue)"
            @input="handleSetDraft"
            v-model:value="value"
            @keydown.enter.prevent="sendMessage"
            auto-resize
            cols="30"
            rows="1"
            placeholder="Энд зурвас аа бичээрэй"
            aria-label="Энд зурвас аа бичээрэй"
          />

          <!--emojis-->
          <div class="absolute bottom-[.8125rem] right-0">
            <!--emoji button-->
            <IconButton
              title="эможи сонгогчийг сэлгэх"
              aria-label="эможи сонгогчийг сэлгэх"
              @click="showPicker = !showPicker"
              class="ic-btn-ghost-primary toggle-picker-button w-7 h-7 md:mr-5 xs:mr-4"
            >
              <XCircleIcon v-if="showPicker" class="w-[1.25rem] h-[1.25rem]" />
              <FaceSmileIcon v-else class="w-[1.25rem] h-[1.25rem] text-gray-400 group-hover:text-indigo-300"/>
            </IconButton>

            <!--emoji picker-->
            <ScaleTransition>
              <div v-click-outside="handleClickOutside" v-show="showPicker" class="absolute z-10 bottom-[3.4375rem] md:right-0 xs:right-[-5rem] mt-2">
                <div role="none">
                  <EmojiPicker :show="showPicker" />
                </div>
              </div>
            </ScaleTransition>
          </div>
        </div>
      </div>

      <div class="min-h-[2.75rem]">
        <!--cancel recording button-->
        <div v-if="recording" @click="handleCancelRecording">
          <Button class="ghost-danger ghost-text"> Цуцлах </Button>
        </div>
      </div>

      <div class="min-h-[2.75rem] flex">
        <!--finish recording button-->
        <IconButton
          v-if="recording"
          title="бичлэгээ дуусгах"
          aria-label="бичлэгээ дуусгах"
          @click="handleToggleRecording"
          class="relative group w-7 h-7 flex justify-center items-center outline-none rounded-full bg-indigo-300 hover:bg-green-300 dark:hover:bg-green-400 dark:focus:bg-green-400 focus:outline-none transition-all duration-200"
        >
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 group-hover:bg-green-300 opacity-40"/>

          <MicrophoneIcon class="w-[1.25rem] h-[1.25rem] text-white group-hover:hidden"/>
          <CheckIcon class="w-[1.25rem] h-[1.25rem] hidden text-white group-hover:block"/>
        </IconButton>

        <!--start recording button-->
        <IconButton
          v-else-if="!value"
          @click="handleToggleRecording"
          title="бичлэг хийж эхлэх"
          aria-label="бичлэг хийж эхлэх"
          class="ic-btn-ghost-primary w-7 h-7 md:mr-5 xs:mr-4"
        >
          <MicrophoneIcon class="w-[1.25rem] h-[1.25rem]" />
        </IconButton>

        <!--send message button-->
        <IconButton
          v-if="!recording && value"
          class="ic-btn-contained-primary w-7 h-7 md:mr-5 xs:mr-4"
          title="мессеж илгээх"
          aria-label="мессеж илгээх"
          @click="sendMessage"
        >
          <PaperAirplaneIcon class="w-[1.0625rem] h-[1.0625rem]" />
        </IconButton>
      </div>
    </div>

    <AttachmentsModal
      :open="openAttachmentsModal"
      :close-modal="() => (openAttachmentsModal = false)"
    />
  </div>
</template>

<style>
input[placeholder="Search emoji"] {
  background: rgba(0, 0, 0, 0);
}

.v3-emoji-picker .v3-header {
  border-bottom: 0;
}

.v3-emoji-picker .v3-footer {
  border-top: 0;
}
</style>
<script setup lang="ts">
import type { Ref } from "vue";
import type { IConversation } from "@src/types";

import useStore from "@src/store/store";
import { ref, inject, onMounted } from "vue";
import { getConversationIndex } from "@src/utils";

import {
  CheckIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";
import AttachmentsModal from "@src/components/shared/modals/AttachmentsModal/AttachmentsModal.vue";
import Button from "@src/components/ui/inputs/Button.vue";
import IconButton from "@src/components/ui/inputs/IconButton.vue";
import ScaleTransition from "@src/components/ui/transitions/ScaleTransition.vue";
import ReplyMessage from "@src/components/views/HomeView/Chat/ChatBottom/ReplyMessage.vue";
import EmojiPicker from "@src/components/ui/inputs/EmojiPicker/EmojiPicker.vue";
import Textarea from "@src/components/ui/inputs/Textarea.vue";

const store = useStore();



// the content of the message.
const value: Ref<string> = ref("");

// determines whether the app is recording or not.
const recording = ref(false);

// open emoji picker.
const showPicker = ref(false);

// open modal used to send multiple attachments attachments.
const openAttachmentsModal = ref(false);

// start and stop recording.
const handleToggleRecording = () => {
  recording.value = !recording.value;
};

// stop recording without sending.
const handleCancelRecording = () => {
  recording.value = false;
};

// close picker when you click outside.
const handleClickOutside = (event: Event) => {
  let target = event.target as HTMLElement;
  let parent = target.parentElement as HTMLElement;

  if (
    target &&
    !target.classList.contains("toggle-picker-button") &&
    parent &&
    !parent.classList.contains("toggle-picker-button")
  ) {
    showPicker.value = false;
  }
};

// (event) set the draft message equals the content of the text area
const handleSetDraft = () => {
  store.updateDraftMessage(value.value)
};

// Send the message
const sendMessage = async () => {
  if (!value.value.trim()) return; // Do nothing if the input is empty

  try {
    const activeConversation = store.activeConversation;
    if (activeConversation) {
      await store.sendMessage(activeConversation.id, value.value);
      value.value = ""; // Clear the input field after sending
    }
  } catch (error) {
    console.error("Failed to send message:", error);
  }
};

onMounted(() => {
  value.value = store.activeConversation.draft_message;
});
</script>
