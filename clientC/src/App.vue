<template>
  <div id="app">
    <popup v-if="popupShow">
      <p>aaa</p>
    </popup>
    <router-view/>
    <Menu class="footer"/>
  </div>
</template>

<script>
import Menu from "./components/menu/menu";
import popup from "./components/popup/popup";
export default {
  name: "App",
  data() {
    return { popupShow: false };
  },
  components: {
    Menu,
    popup
  }
};
</script>

<style lang="stylus" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3.0625rem;
  background-color: #ffffff;
  color: #666666;
}

.my-bullet {
  width: 0.375rem;
  height: 0.375rem;
  display: inline-block;
  border-radius: 100%;
  background-color: #ffffff;
  margin-right: 0.375rem;
}

.my-bullet-active {
  background: #ff6600;
}

.swiper-scrollbar-drag {
  background: #FF6969;
}

.hasMargin {
  margin: 0.5rem 0 !important;
}
</style>