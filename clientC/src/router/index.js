import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home/home";
import pageContainer from "@/components/pageContainer/pageContainer";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    }
  ]
});
