<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiper" :key="item.id">
        <img :data-src="item.src" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: ["swiper"],
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "fade",
        lazy: {
          loadPrevNext: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      }
    };
  },
  components: { swiper, swiperSlide }
};
</script>
<style lang="stylus" scoped>
.swiper {
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

.swiper-pagination {
  text-align: right;
  box-sizing: border-box;
  padding: 0 0.625rem;
}
</style>
