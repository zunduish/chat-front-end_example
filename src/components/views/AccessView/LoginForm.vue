<template>
  <div class="p-5 md:basis-1/2 xs:basis-full flex flex-col justify-center items-center">
    <div class="text-[36px]">
      <p>Нэвтрэх</p>
    </div>
    <div class="w-full md:px-[26%] xs:px-[10%] login_input_container form-content">

      <a-form
        class="mx-auto"
        :model="credentials"
        layout="vertical"
        autocomplete="off"
      >
        <div class="space-y-6">
          <div class="loginInput">
            <a-form-item name="login" :rules="[{ required: true, message: 'Нэвтрэх нэрээ оруулна уу!' }]">
<!--         <div class="pb-2 text-slate-700">Хэрэглэгчийн нэр</div>-->
              <a-input type="text" placeholder="Нэвтрэх нэр" v-model:value="credentials.login" class="rounded-lg bg-white">
                <template #prefix>
                 <span class="svg-icon">
                   <inline-svg class="w-4 h-4 mr-1"
                               src="/assets/icons/duotone/General/User.svg"
                   />
                 </span>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="password" :rules="[{ required: true, message: 'Нууц үгээ оруулна уу!' }]">
<!--              <div class="pb-2 text-slate-700">Нууц үг</div>-->
              <a-input-password placeholder="Нууц үг" v-model:value="credentials.password" class="rounded-lg bg-white">
                <template #prefix>
                 <span class="svg-icon">
                   <inline-svg class="w-4 h-4 mr-1"
                               src="/assets/icons/duotone/General/Lock.svg"
                   />
                 </span>
                </template>
              </a-input-password>
            </a-form-item>

            <div class="flex flex-row justify-between space-x-4">
              <a-checkbox v-model:checked="rememberMe"><span class=" text-slate-700">Намайг сануулах</span></a-checkbox>
<!--              <NuxtLink class="forgot" to="/auth/forgot">{ lang.forgot }}</NuxtLink>-->
            </div>
          </div>
          <div class="">
            <a-button type="primary" class="w-fit px-6 rounded-lg bg-purple-900" :loading="loading" style="height: 38px" @click="handleLogin" html-type="submit">Нэвтрэх</a-button>
          </div>

          <div id="msg">
            <span v-if="isSuccess" class="success">{ lang.loginSuccess }}</span>
            <span v-if="isError" class="error">{ lang.loginError }}</span>
          </div>

        </div>
      </a-form>

      <!--oauth controls-->
      <div>
        <!--bottom text-->
        <div class="flex justify-center">
          <p class="body-2 text-color">
            Бүртгэлгүй юу?
            <a href="https://amjilt.com/register" target="_blank" class="text-indigo-400 opacity-100">
              Бүртгүүлэх
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useStore from "@src/store/store";
import { useRouter } from "vue-router";
import { ref } from "vue";
const credentials = ref({
  login: null,
  password: null
});

const loading = ref(false);

// Use Pinia store
const store = useStore();
const router = useRouter();

const  handleLogin = async ()=>{
  loading.value = true;
  try {
    await  store.login(credentials.value.login, credentials.value.password); // Call the login method from the store
    router.push("/chat"); // Redirect to the chat page on success
  } catch (error) {
    alert("Нэвтрэлт амжилтгүй боллоо. Та мэдээллээ шалгана уу.");
    console.error(error);
  } finally {
    loading.value = false;
  }
}

</script>

