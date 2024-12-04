<template>
  <!--notifications settings-->
  <AccordionButton
    id="notifications-settings-toggler"
    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
    :collapsed="props.collapsed"
    chevron
    aria-controls="notifications-settings-collapse"
    @click="props.handleToggle()"
  >
    <p class="heading-2 text-color mb-4">Мэдэгдэл</p>
    <p class="body-2 text-color">Мэдэгдлийг тохируулах</p>
  </AccordionButton>

  <Collapse id="notifications-settings-collapse" :collapsed="props.collapsed">
    <SettingsSwitch
      title="Мэдэгдлийг зөвшөөрөх"
      description="Мэдэгдэл хүлээн авах"
      :value="!!store.settings.allowNotifications"
      :handle-toggle-switch="
        (value) => (store.settings.allowNotifications = value)
      "
      class="mb-7"
    />
    <SettingsSwitch
      title="Мэдэгдэл хадгалах"
      description="Мэдэгдэл хүлээн авсны дараа тэдгээрийг хадгална уу"
      :value="!!store.settings.keepNotifications"
      :handle-toggle-switch="
        (value) => (store.settings.keepNotifications = value)
      "
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
