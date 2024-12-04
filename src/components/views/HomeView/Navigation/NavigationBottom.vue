<template>
  <div class="w-full h-full flex justify-center items-center transition-all duration-500">
    <!--main navigation-->
    <div class="grow">
      <nav aria-label="Main navigation">
        <div class="w-full h-full  flex gap-3 justify-center pt-6">
          <!--message button-->
            <NavLink
              :icon="ChatBubbleOvalLeftIcon"
              title="Харилцан яриа"
              @click="() => handleActiveSidebarComponentChange('messages')"
              :active="store.activeSidebarComponent === 'messages'"
            />

          <!--contacts list button-->
            <NavLink
              :icon="UserIcon"
              title="Харилцагчид"
              @click="() => handleActiveSidebarComponentChange('contacts')"
              :active="store.activeSidebarComponent === 'contacts'"
            />


          <!--dropdown button small screen-->
            <AccountDropdown
              id="small-profile-menu"
              class="xs:block md:hidden"
              aria-labelledby="small-profile-menu-button"
              :show-dropdown="showDropdown"
              :handle-show-dropdown="() => (showDropdown = true)"
              :handle-close-dropdown="() => (showDropdown = false)"
            />

          <!--voice call button-->
          <NavLink
            :icon="PhoneIcon"
            title="Дуудлагын бүртгэл"
            @click="() => handleActiveSidebarComponentChange('phone')"
            :active="store.activeSidebarComponent === 'phone'"
          />

          <!--notifications button-->
            <NavLink
              :icon="BellIcon"
              title="Мэдэгдэлүүд"
              :notifications="3"
              @click="() => handleActiveSidebarComponentChange('notifications')"
              :active="store.activeSidebarComponent === 'notifications'"
            />

          <!--settings button small screen-->
            <NavLink
              :icon="Cog6ToothIcon"
              title="Тохиргоо"
              @click="() => handleActiveSidebarComponentChange('settings')"
              :active="store.activeSidebarComponent === 'settings'"
            />

            <!--user avatar-->
            <AccountDropdown
              id="profile-menu"
              aria-labelledby="profile-menu-button"
              :show-dropdown="showDropdown"
              :handle-show-dropdown="() => (showDropdown = true)"
              :handle-close-dropdown="() => (showDropdown = false)"
            />
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import useStore from "@src/store/store";

import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";
import AccountDropdown from "@src/components/views/HomeView/Navigation/AccountDropdown.vue";
import NavLink from "@src/components/views/HomeView/Navigation/NavLink.vue";

const store = useStore();

const showDropdown = ref(false);

// (event) change the active sidebar component when clicking on a NavLink
const handleActiveSidebarComponentChange = (value: string) => {
  store.activeSidebarComponent = value;
};
</script>
