<template>
  <!--settings accordion-->
  <div
    role="list"
    aria-label="Тохиргоонууд Баян хуурын хяналтын бүлгийн товчлуурууд"
    class="h-full"
  >
    <AccountSettings
      :collapsed="accordionState['account-settings']"
      :handleToggle="() => handleToggle(accordionItems.accountSettings)"
    />
    <PrivacySettings
      :collapsed="accordionState['privacy-settings']"
      :handleToggle="() => handleToggle(accordionItems.privacySettings)"
    />
    <AppearanceSettings
      :collapsed="accordionState['appearance-settings']"
      :handleToggle="() => handleToggle(accordionItems.appearanceSettings)"
    />
    <NotificationsSettings
      :collapsed="accordionState['notifications-settings']"
      :handleToggle="() => handleToggle(accordionItems.notificationsSettings)"
    />

    <a @click="store.settings.darkMode = !store.settings.darkMode"
       class="py[24px] px-[16px] text-[14px] font-semibold  text-color">
      Өдрийн горим / Шөнийн горим
    </a>
<!--    <NavLink-->
<!--      :icon="store.settings.darkMode ? SunIcon : MoonIcon"-->
<!--      title="Шөнийн горим"-->
<!--      @click="store.settings.darkMode = !store.settings.darkMode"-->
<!--    />-->
  </div>
  <div class="w-[290px] h-[60px] absolute bottom-0 bg-gray-800">
    <NavigationBottom/>
  </div>




</template>

<script setup lang="ts">


import useStore from "@src/store/store";


const store = useStore();

// (event) change the active sidebar component when clicking on a NavLink
const handleActiveSidebarComponentChange = (value: string) => {
  store.activeSidebarComponent = value;
};


import { ref } from "vue";

import AccountSettings from "@src/components/views/HomeView/Sidebar/Settings/SettingsAccordion/AccountSettings.vue";
import PrivacySettings from "@src/components/views/HomeView/Sidebar/Settings/SettingsAccordion/PrivacySettings.vue";
import AppearanceSettings from "@src/components/views/HomeView/Sidebar/Settings/SettingsAccordion/AppearanceSettings.vue";
import NotificationsSettings from "@src/components/views/HomeView/Sidebar/Settings/SettingsAccordion/NotificationsSettings.vue";
import NavigationBottom from "@src/components/views/HomeView/Navigation/NavigationBottom.vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import NavLink from "@src/components/views/HomeView/Navigation/NavLink.vue";

// Types
enum accordionItems {
  accountSettings = "account-settings",
  privacySettings = "privacy-settings",
  appearanceSettings = "appearance-settings",
  notificationsSettings = "notifications-settings",
}

const accordionState = ref({
  "account-settings": true,
  "privacy-settings": true,
  "appearance-settings": true,
  "notifications-settings": true,
});

const handleToggle = (name: accordionItems) => {
  // close all opened tabs
  for (let key of Object.keys(accordionState.value)) {
    if (key !== name) {
      accordionState.value[<accordionItems>key] = true;
    }
  }
  // open the clicked tabs
  accordionState.value[name] = !accordionState.value[name];
};
</script>
