<template>
  <div class="w-full flex justify-end mb-5">
    <!--decrease zoom-->
    <IconButton
      title="жижигрүүлэх"
      v-show="props.isImage"
      aria-label="жижигрүүлэх"
      class="mr-5"
      @click="props.handleDecreaseZoom()"
    >
      <MagnifyingGlassMinusIcon
        class="w-6 h-6 text-white opacity-80 hover:opacity-100"
      />
    </IconButton>

    <!--increase zoom-->
    <IconButton
      title="томруулах"
      v-show="props.isImage"
      aria-label="томруулах"
      class="mr-5"
      @click="props.handleIncreaseZoom()"
    >
      <MagnifyingGlassPlusIcon
        class="w-6 h-6 text-white opacity-80 hover:opacity-100"
      />
    </IconButton>

    <!--delete media-->
    <IconButton
      aria-label="хавсралтыг устгах"
      class="mr-5"
      title="хавсралтыг устгах"
    >
      <TrashIcon class="w-6 h-6 text-white opacity-80 hover:opacity-100" />
    </IconButton>

    <!--close carousel-->
    <IconButton
      title="тойруулгыг хаах"
      aria-label="тойруулгыг хаах"
      @click="props.handleCloseCarousel()"
    >
      <XMarkIcon class="w-6 h-6 text-white opacity-80 hover:opacity-100" />
    </IconButton>
  </div>
</template>

<script setup lang="ts">
import {
  XMarkIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";
import IconButton from "@src/components/ui/inputs/IconButton.vue";

const props = defineProps<{
  handleCloseCarousel: () => void;
  handleIncreaseZoom: () => void;
  handleDecreaseZoom: () => void;
  isImage: boolean;
}>();
</script>
