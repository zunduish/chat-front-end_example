<template>
  <div
    class="p-5 md:basis-1/2 xs:basis-full flex flex-col justify-center items-center"
  >
    <div class="w-full md:px-[26%] xs:px-[10%]">
      <!--header-->
      <div class="mb-6 flex flex-col">
        <img
          src="@src/assets/vectors/amjilt.svg"
          class="w-[1.375rem] h-[1.125rem] mb-5 opacity-70"
         alt=""/>
        <p class="heading-2 text-color mb-4">Amjilt Chat-г эхлүүлэх</p>
        <p class="body-3 text-color text-opacity-75 font-light">
          Мессеж ашиглаж эхлэхийн тулд нэвтэрнэ үү!
        </p>
      </div>

      <!--form section-->
      <SlideTransition :animation="animation">
        <component
          @active-section-change="changeActiveSection"
          :is="ActiveSection"
        />
      </SlideTransition>

      <!--bottom text-->
      <div class="flex justify-center">
        <p class="body-2 text-color">
          Та бүртгэлтэй юу?
          <RouterLink to="/access/sign-in/" class="text-indigo-400 opacity-100">
            Нэвтрэх
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import SlideTransition from "@src/components/ui/transitions/SlideTransition.vue";
import PasswordSection from "@src/components/views/AccessView/RegisterForm/PasswordSection.vue";
import PersonalSection from "@src/components/views/AccessView/RegisterForm/PersonalSection.vue";
import { RouterLink } from "vue-router";

defineEmits(["activeSectionChange"]);

// determines what form section to use.
const activeSectionName = ref("personal-section");

// determines what direction the slide animation should use.
const animation = ref("slide-left");

// get the active section component from the section name
const ActiveSection = computed((): any => {
  if (activeSectionName.value === "personal-section") {
    return PersonalSection;
  } else if (activeSectionName.value === "password-section") {
    return PasswordSection;
  }
});

// (event) to move between modal pages
const changeActiveSection = (event: {
  sectionName: string;
  animationName: string;
}) => {
  animation.value = event.animationName;
  activeSectionName.value = event.sectionName;
};
</script>
