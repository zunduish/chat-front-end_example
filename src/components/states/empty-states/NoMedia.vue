<template>
  <div
    class="w-full p-5 flex"
    :class="
      props.vertical
        ? ['flex-col', 'justify-center', 'items-center']
        : ['flex-row']
    "
  >
    <!--icon-->
    <div :class="props.vertical ? ['mb-3'] : []">
      <div
        class="w-7 h-7 mr-4 flex justify-center items-center rounded-full bg-gray-50 dark:bg-gray-700 transition duration-500"
      >
        <VideoCameraSlashIcon
          class="w-5 h-5 text-gray-500 dark:text-white dark:opacity-70"
        />
      </div>
    </div>

    <!--content-->
    <div :class="props.vertical ? [] : ['flex', 'flex-col', 'items-start']">
      <p class="heading-2 text-color mb-3">Мэдээлэл байхгүй</p>

      <p class="body-2 text-color flex">Энэ харилцан ярианд хэвлэл мэдээлэл байхгүй байна.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoCameraSlashIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  vertical?: boolean;
}>();
</script>
