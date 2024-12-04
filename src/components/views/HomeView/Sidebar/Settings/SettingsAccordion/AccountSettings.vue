<template>
  <!--account settings-->
  <AccordionButton
    id="account-settings-toggler"
    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
    :collapsed="props.collapsed"
    chevron
    aria-controls="account-settings-collapse"
    @click="handleToggle()"
  >
    <p class="heading-2 text-color mb-4">Хаяг</p>
    <p class="body-2 text-color">Профайлынхаа дэлгэрэнгүй мэдээллийг шинэчилнэ үү</p>
  </AccordionButton>

  <Collapse id="account-settings-collapse" :collapsed="props.collapsed">
    <LabeledTextInput
      label="Нэр"
      inputClasses="mb-7"
      :value="accountValues?.first_name"
      @value-changed="(value) => (accountValues.first_name = value)"
    />
    <LabeledTextInput
      label="0вог"
      inputClasses="mb-7"
      :value="accountValues?.last_name"
      @value-changed="(value) => (accountValues.last_name = value)"
    />
    <DropFileUpload
      label="Зураг"
      class="mb-7"
      accept="image/*"
      :value="accountValues.avatar"
      @value-changed="(value) => (accountValues.avatar = value)"
    />
    <Button
      class="contained-primary contained-text w-full py-4"
      @click="handleSubmit"
      :loading="loading"
    >
      Тохиргоог хадгалах
    </Button>
  </Collapse>
</template>

<script setup lang="ts">
import type { Ref } from "vue";

import { ref } from "vue";

import useStore from "@src/store/store";

import AccordionButton from "@src/components/ui/data-display/AccordionButton.vue";
import Button from "@src/components/ui/inputs/Button.vue";
import DropFileUpload from "@src/components/ui/inputs/DropFileUpload.vue";
import LabeledTextInput from "@src/components/ui/inputs/LabeledTextInput.vue";
import Collapse from "@src/components/ui/utils/Collapse.vue";

// Types
interface AccountValues {
  first_name: string | undefined;
  last_name: string | undefined;
  avatar: File | undefined;
}

// Variables
const props = defineProps<{
  collapsed: boolean;
  handleToggle: () => void;
}>();

const store = useStore();

const accountValues: Ref<AccountValues> = ref({
  first_name: store.user?.first_name,
  last_name: store.user?.last_name,
  avatar: undefined,
});

const loading = ref(false);

// (event) handle submitting the values of the form.
const handleSubmit = () => {
  loading.value = true;

  store.$patch({
    user: {
      ...store.user,
      first_name: accountValues.value.first_name,
      last_name: accountValues.value.last_name,
    },
  });

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
