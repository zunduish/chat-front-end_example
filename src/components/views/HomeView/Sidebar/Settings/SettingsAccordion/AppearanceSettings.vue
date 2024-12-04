<template>
  <!--appearance settings-->
  <AccordionButton
    id="appearance-settings-toggler"
    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
    :collapsed="props.collapsed"
    chevron
    aria-controls="appearance-settings-collapse"
    @click="props.handleToggle()"
  >
    <p class="heading-2 text-color mb-4">Гадаад төрх</p>
    <p class="body-2 text-color">Харагдах байдал, мэдрэмжийг өөрчил</p>
  </AccordionButton>

  <Collapse id="appearance-settings-collapse" :collapsed="props.collapsed">
    <SettingsSwitch
      title="Харанхуй горим"
      description="Харанхуй өнгө бүхий загварыг хэрэглээрэй"
      :value="!!store.settings.darkMode"
      :handle-toggle-switch="(value) => (store.settings.darkMode = value)"
      class="mb-7"
    />
    <SettingsSwitch
      title="Хилтэй сэдэв"
      description="Загварт хүрээг ашиглах"
      :value="!!store.settings.borderedTheme"
      :handle-toggle-switch="(value) => (store.settings.borderedTheme = value)"
      class="mb-7"
    />
  </Collapse>
</template>
<script setup lang="ts">
import useStore from "@src/store/store";

import AccordionButton from "@src/components/ui/data-display/AccordionButton.vue";
import Collapse from "@src/components/ui/utils/Collapse.vue";
import SettingsSwitch from "@src/components/views/HomeView/Sidebar/Settings/SettingsAccordion/SettingsSwitch.vue";

const props = defineProps<{
  collapsed: boolean;
  handleToggle: () => void;
}>();

const store = useStore();
</script>
