import "animate.css";

import Vue from "vue";
import App from "./App.vue";

import Eagle from "eagle.js";
import Meta from "vue-meta";

Vue.use(Eagle);
Vue.use(Meta);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
