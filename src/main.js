import "animate.css";

import Vue from "vue";
import App from "./App.vue";

import Eagle from "eagle.js";

Vue.use(Eagle);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
