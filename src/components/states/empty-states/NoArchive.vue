<template>
  <div class="w-full p-5 flex">
    <!--icon-->
    <div>
      <div class="w-7 h-7 mr-4 flex justify-center items-center rounded-full bg-gray-50 dark:bg-gray-700 transition duration-500">
        <InboxIcon class="w-5 h-5 text-gray-500 dark:text-white dark:opacity-70"/>
      </div>
    </div>

    <!--content-->
    <div>
      <p class="heading-2 text-color mb-3">Архивлагдсан харилцан яриа байхгүй</p>
      <p class="body-2 text-color flex">
        Харилцан ярианы контекст цэснээс архивыг сонгоно уу.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { InboxIcon } from "@heroicons/vue/24/outline";
</script>
