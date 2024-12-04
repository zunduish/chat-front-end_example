<template>
  <div class="mb-7 h-7 xs:hidden md:block">
    <a
      href="#mainContent"
      title="Үндсэн агуулга руу шилжих"
      @blur="SkipLinkFocused = false"
      @focus="SkipLinkFocused = true"
      class="outline-none"
      :class="{
        absolute: !SkipLinkFocused,
        'right-[625rem]': !SkipLinkFocused,
      }"
    >
      <ForwardIcon class="w-7 h-6 text-indigo-300" />
    </a>

    <button
      aria-label="Amjilt.com"
      :class="{ hidden: SkipLinkFocused }"
      class="outline-none"
    >
      <img
        v-if="!store.settings.darkMode"
        src="@src/assets/vectors/amjilt.svg"
        class="w-8 h-7"
        alt="Amjilt.com"
      />
<!--      alt="gray bird logo"-->
      <img
        v-else
        src="@src/assets/vectors/amjilt-dark.svg"
        class="w-8 h-7 opacity-40"
        alt="Amjilt.com"
      />
<!--      alt="white bird logo"-->
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import useStore from "@src/store/store";
import { ForwardIcon } from "@heroicons/vue/24/outline";

let SkipLinkFocused = ref(false);

const store = useStore();
</script>
