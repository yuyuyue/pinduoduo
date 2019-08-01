<template>
  <div>
    <div v-if="notification" class="notification">
      <img
        class="notification-img"
        src="//images.pinduoduo.com/mrk/2018-08-17/af5b8984-b3d8-4f69-8eb9-464ff52169a0.png"
      >
    </div>
    <nav-bar class="header"/>
    <page-container/>
  </div>
</template>

<script>
import navBar from "../navBar/navBar";
import pageContainer from "../pageContainer/pageContainer";
export default {
  data() {
    return { notification: true };
  },
  components: {
    navBar,
    pageContainer
  }
};
</script>

<style lang="stylus" scoped>
.notification {
  width: 100%;
  height: 11.4666666666666%;

  .notification-img {
    width: 100%;
    height: auto;
    min-height: 2.8125rem;
  }
}

.header {
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  height: 3.1875rem;
  background-color: #fff;
  z-index: 10000;
}
</style>
