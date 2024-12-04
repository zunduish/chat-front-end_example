<template>
  <div class="pb-6">
    <!--search-->
    <div class="mx-5 mb-5">
      <SearchInput />
    </div>

    <!--contacts-->
    <ScrollBox class="overflow-y-scroll max-h-[12.5rem]">
      <Circle2Lines v-if="store.status === 'loading'" v-for="item in 3"/>
      <ContactItem
        v-else-if="
          store.status === 'success' &&
          store.user &&
          store.contacts.length > 0
        "
        v-for="(contact, index) in store.contacts"
        :key="index"
        :contact="contact"
      />

      <NoContacts vertical v-else />
    </ScrollBox>
  </div>
</template>

<script setup lang="ts">
import useStore from "@src/store/store";

import NoContacts from "@src/components/states/empty-states/NoContacts.vue";
import Circle2Lines from "@src/components/states/loading-states/Circle2Lines.vue";
import SearchInput from "@src/components/ui/inputs/SearchInput.vue";
import ContactItem from "@src/components/shared/blocks/ContactItem.vue";
import ScrollBox from "@src/components/ui/utils/ScrollBox.vue";

const store = useStore();
</script>

