<template>
  <div class="flex flex-col">
    <!-- Label -->
    <label v-if="label" :id="id" class="body-2 text-color mb-3">
      {{ label }}
    </label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Start Adornment Slot -->
      <div class="absolute left-0 top-0">
        <slot name="startAdornment"></slot>
      </div>

      <!-- TextInput -->
      <TextInput
        :type="type || 'text'"
        :id="id"
        :name="name"
        :value="value"
        class="text-input"
        :class="[
          bordered ? 'bordered-input' : 'ringed-input',
           props.class,
        ]"
        :placeholder="placeholder"
        @input="updateValue"
      />

      <!-- End Adornment Slot -->
      <div class="absolute top-0 right-0">
        <slot name="endAdornment"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextInput from "@src/components/ui/inputs/TextInput.vue";

// Define props and emits for v-model compatibility
const props = defineProps({
  id: String,
  type: String,
  label: String,
  value: String, // Required for v-model compatibility
  name: String,
  class: String,
  placeholder: String,
  bordered: Boolean,
});
const emit = defineEmits(["update:value"]);


// Emit the updated value
const updateValue = (e: string) => {

  emit("update:value", e.target.value);
};
</script>
