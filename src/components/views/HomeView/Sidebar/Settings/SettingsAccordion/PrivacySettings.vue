<template>
  <!--privacy settings-->
  <AccordionButton
    id="privacy-settings-toggler"
    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
    :collapsed="props.collapsed"
    chevron
    aria-controls="privacy-settings-collapse"
    @click="props.handleToggle()">
    <p class="mb-4 heading-2 text-color">Нууцлал ба аюулгүй байдал</p>
    <p class="body-2 text-color">Нууцлалын тохиргоогоо хянаарай</p>
  </AccordionButton>

  <Collapse id="privacy-settings-collapse" :collapsed="props.collapsed">
    <SettingsSwitch
      title="Сүүлд үзсэнийг харуулах"
      description="Хүмүүст таны сүүлийн нэвтрэлтийг харахыг зөвшөөрнө үү"
      :value="!!store.settings.lastSeen"
      :handle-toggle-switch="
        (value: boolean) => (store.settings.lastSeen = value)
      "
      class="mb-7"
    />
    <SettingsSwitch
      title="Уншсан баримтыг харуулах"
      description="Таныг мессежийг уншсан эсэхийг харах боломжийг хүмүүст олгоно уу"
      :value="!!store.settings.readReceipt"
      :handle-toggle-switch="
        (value: boolean) => (store.settings.readReceipt = value)
      "
      class="mb-7"
    />
    <SettingsSwitch
      title="Бүлгүүдэд нэгдэх"
      description="Хүмүүст таныг бүлэгт нэмэхийг зөвшөөрнө үү"
      :value="!!store.settings.joiningGroups"
      :handle-toggle-switch="
        (value: boolean) => (store.settings.joiningGroups = value)
      "
      class="mb-7"
    />
    <SettingsSwitch
      title="Хувийн зурвасууд"
      description="Харилцагч бус хүмүүсээс мессеж хүлээн авах"
      :value="!!store.settings.privateMessages"
      :handle-toggle-switch="
        (value: boolean) => (store.settings.privateMessages = value)
      " class="mb-7"/>
  </Collapse>
</template>

<script setup lang="ts">
import useStore from "@src/store/store";

import AccordionButton from "@src/components/ui/data-display/AccordionButton.vue";
import Collapse from "@src/components/ui/utils/Collapse.vue";
import SettingsSwitch from "@src/components/views/HomeView/Sidebar/Settings/SettingsAccordion/SettingsSwitch.vue";

// Variables
const props = defineProps<{
  collapsed: boolean;
  handleToggle: () => void;
}>();

const store = useStore();
</script>
