<template>
  <div class="wrapper">
    <swiper :options="info.swiperOption">
      <swiper-slide v-for="item in info.items" :key="item.id">
        <small-item :itemInfo="item"/>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import smallItem from "../smallItem/smallItem";
export default {
  props: ["info"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: { smallItem, swiper, swiperSlide }
};
</script>
<style lang="stylus" scoped>
.wrapper {
  background-color: #fff;
}

.swiper-container {
  padding-bottom: 0.625rem;
}

.swiper-scrollbar {
  left: 40%;
  width: 20%;
  height: 0.125rem;
}
</style>