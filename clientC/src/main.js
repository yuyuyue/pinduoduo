import Vue from "vue";
import App from "./App";
import router from "./router";
import "normalize.css";
import "whatwg-fetch";
import "es6-promise";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
