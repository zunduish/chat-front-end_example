import router from "@src/router";
import "@src/style.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import vClickOutside from "click-outside-vue3";

import App from "@src/App.vue";
import './assets/main.css';
import 'ant-design-vue/dist/reset.css';
import { DatePicker } from 'ant-design-vue';

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(vClickOutside).use(DatePicker).mount("#app");
