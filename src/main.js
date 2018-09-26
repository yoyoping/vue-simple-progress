import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ProgressBar from "./index";

Vue.config.productionTip = false;
Vue.use(ProgressBar);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
