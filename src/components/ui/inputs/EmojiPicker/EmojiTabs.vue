<template>
  <div class="flex justify-between">
    <!--people-->
    <div
      class="pb-[.3125rem] border-b transition-colors duration-200"
      :class="[
        props.active === 'people'
          ? 'border-indigo-400 rounded-1'
          : 'border-transparent',
      ]"
    >
      <IconButton
        @click="$emit('tab-change', 'people')"
        title="хүмүүс ба инээмсэглэл"
        aria-label="хүмүүс ба инээмсэглэл"
      >
        <FaceSmileIcon
          class="w-5 h-5 transition-colors duration-200"
          :class="[
            props.active === 'people'
              ? ['text-indigo-400 dark:text-indigo-400']
              : ['text-gray-500 dark:text-white dark:opacity-60'],
          ]"
        />
      </IconButton>
    </div>

    <!--nature-->
    <div
      class="pb-[.3125rem] border-b transition-colors duration-200"
      :class="[
        props.active === 'nature'
          ? 'border-indigo-400 rounded-1'
          : 'border-transparent',
      ]"
    >
      <IconButton
        title="байгаль"
        aria-label="байгаль"
        @click="$emit('tab-change', 'nature')"
      >
        <FireIcon
          class="w-5 h-5 transition-colors duration-200"
          :class="[
            props.active === 'nature'
              ? ['text-indigo-400 dark:text-indigo-400']
              : ['text-gray-500 dark:text-white dark:opacity-60'],
          ]"
        />
      </IconButton>
    </div>

    <!--food-->
    <div
      class="pb-[.3125rem] border-b transition-colors duration-200"
      :class="[
        props.active === 'food'
          ? 'border-indigo-400 rounded-1'
          : 'border-transparent',
      ]"
    >
      <IconButton
        title="хоол"
        aria-label="хоол"
        @click="$emit('tab-change', 'food')"
      >
        <CakeIcon
          class="w-5 h-5 transition-colors duration-200"
          :class="[
            props.active === 'food'
              ? ['text-indigo-400 dark:text-indigo-400']
              : ['text-gray-500 dark:text-white dark:opacity-60'],
          ]"
        />
      </IconButton>
    </div>

    <!--activity-->
    <div
      class="pb-[.3125rem] border-b transition-colors duration-200"
      :class="[
        props.active === 'activity'
          ? 'border-indigo-400 rounded-1'
          : 'border-transparent',
      ]"
    >
      <IconButton
        @click="$emit('tab-change', 'activity')"
        title="үйл ажиллагаа, спорт"
        aria-label="үйл ажиллагаа, спорт"
      >
        <RocketLaunchIcon
          class="w-5 h-5 transition-colors duration-200"
          :class="[
            props.active === 'activity'
              ? ['text-indigo-400 dark:text-indigo-400']
              : ['text-gray-500 dark:text-white dark:opacity-60'],
          ]"
        />
      </IconButton>
    </div>

    <!--objects-->
    <div
      class="pb-[.3125rem] border-b transition-colors duration-200"
      :class="[
        props.active === 'objects'
          ? 'border-indigo-400 rounded-1'
          : 'border-transparent',
      ]"
    >
      <IconButton @click="$emit('tab-change', 'objects')">
        <LightBulbIcon
          class="w-5 h-5 transition-colors duration-200"
          :class="[
            props.active === 'objects'
              ? ['text-indigo-400 dark:text-indigo-400']
              : ['text-gray-500 dark:text-white dark:opacity-60'],
          ]"
        />
      </IconButton>
    </div>

    <!--travel-->
    <div
      class="pb-[.3125rem] border-b transition-colors duration-200"
      :class="[
        props.active === 'travel'
          ? 'border-indigo-400 rounded-1'
          : 'border-transparent',
      ]"
    >
      <IconButton
        @click="$emit('tab-change', 'travel')"
        title="аялал"
        aria-label="аялал"
      >
        <GlobeAsiaAustraliaIcon
          class="w-5 h-5 transition-colors duration-200"
          :class="[
            props.active === 'travel'
              ? ['text-indigo-400 dark:text-indigo-400']
              : ['text-gray-500 dark:text-white dark:opacity-60'],
          ]"
        />
      </IconButton>
    </div>

    <!--flags-->
    <div
      class="pb-[.3125rem] border-b transition-colors duration-200"
      :class="[
        props.active === 'flags'
          ? 'border-indigo-400 rounded-1'
          : 'border-transparent',
      ]"
    >
      <IconButton
        title="тугнууд"
        aria-label="тугнууд"
        @click="$emit('tab-change', 'flags')"
      >
        <FlagIcon
          class="w-5 h-5 transition-colors duration-200"
          :class="[
            props.active === 'flags'
              ? ['text-indigo-400 dark:text-indigo-400']
              : ['text-gray-500 dark:text-white dark:opacity-60'],
          ]"
        />
      </IconButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconButton from "@src/components/ui/inputs/IconButton.vue";
import {
  FaceSmileIcon,
  FireIcon,
  CakeIcon,
  FlagIcon,
  RocketLaunchIcon,
  GlobeAsiaAustraliaIcon,
  LightBulbIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps<{
  active: string;
}>();
</script>
