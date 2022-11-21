import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import AgoraRtcVue from "agora-rtc-vue";
import "agora-rtc-vue/lib/agora-rtc-vue.css";
import { token, appId } from './const/Agora'

Vue.use(AgoraRtcVue,{
    appid: appId,
    token,
});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
