<template>
  <div class="w-full p-5 flex flex-col justify-center items-center">
    <div class="mb-6 w-[21.875rem]">
      <!--header-->
      <div class="mb-6 flex flex-col">
        <img
          src="@src/assets/vectors/amjilt.svg"
          class="w-[1.375rem] h-[1.125rem] mb-4 opacity-70"
          alt="Amjilt"
        />
        <p class="heading-2 text-color mb-4">Нууц үгээ дахин тохируулна уу</p>
        <p class="body-3 text-color text-opacity-75 font-light">
          Доорх хуучин нууц үг болон шинэ нууц үгээ оруулна уу
          нууц үг
        </p>
      </div>

      <!--form-->
      <div class="mb-6">
        <PasswordInput
          :value="oldPassword"
          @valueChanged=" (value) => { oldPassword = value; } "
          bordered
          label="Хуучин нууц үг"
          placeholder="Нууц үгээ оруулна уу"
          class="mb-5"
        />

        <PasswordInput
          :value="newPassword"
          @valueChanged="
            (value) => {
              newPassword = value;
            }
          "
          bordered
          label="Шинэ нууц үг"
          placeholder="Нууц үгээ оруулна уу"
          class="mb-5"
        />

        <PasswordInput
          :value="confirmNewPassword"
          @valueChanged="
            (value) => {
              confirmNewPassword = value;
            }"
          bordered
          label="Шинэ нууц үгээ баталгаажуулна уу"
          placeholder="Нууц үгээ оруулна уу"
        />
      </div>

      <!--controls-->
      <div>
        <Button class="contained-primary contained-text w-full" link to="/"
          >Нууц үг солих</Button
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import Button from "@src/components/ui/inputs/Button.vue";
import PasswordInput from "@src/components/ui/inputs/PasswordInput.vue";

const oldPassword = ref("");
const newPassword = ref("");
const confirmNewPassword = ref("");
</script>
