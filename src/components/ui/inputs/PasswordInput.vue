<template>
  <LabeledTextInput
    :id="id"
    :type="showPassword ? 'text' : 'password'"
    :label="label"
    :value="value"
    :placeholder="placeholder"
    :class="class"
    :bordered="bordered"
    @update:value="updateValue"
  >
    <!-- End Adornment: Toggle Password Visibility -->
    <template v-slot:endAdornment>
      <IconButton
        title="Toggle password visibility"
        aria-label="Toggle password visibility"
        class="m-[.5rem] p-2"
        @click="togglePasswordVisibility"
      >
        <EyeSlashIcon v-if="showPassword" class="w-5 h-5" />
        <EyeIcon v-else class="w-5 h-5" />
      </IconButton>
    </template>
  </LabeledTextInput>
</template>

<script setup lang="ts">
import { ref } from "vue";

import LabeledTextInput from "@src/components/ui/inputs/LabeledTextInput.vue";
import IconButton from "@src/components/ui/inputs/IconButton.vue";
import { EyeSlashIcon, EyeIcon } from "@heroicons/vue/24/outline";

// Props for the PasswordInput component
defineProps({
  id: String,
  label: String,
  value: String, // Required for v-model compatibility
  placeholder: String,
  bordered: Boolean,
  class: String,
});

// Emit the updated value for v-model
const emit = defineEmits(["update:value"]);

// Local state for toggling password visibility
const showPassword = ref(false);

// Methods
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const updateValue = (newValue: string) => {
  emit("update:value", newValue);
};
</script>
