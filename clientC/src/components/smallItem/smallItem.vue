<template>
  <div class="wrapper">
    <div class="pic">
      <img :src="itemInfo.imgSrc" class="mian">
      <img v-if="itemInfo.moreInfo" :src="itemInfo.moreSrc" class="tip">
    </div>
    <div class="title">{{itemInfo.title}}</div>
  </div>
</template>

<script>
export default {
  props: ["itemInfo"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {}
};
</script>
<style lang="stylus" scoped>
.wrapper {
  padding-top: 0.5rem;

  .pic {
    margin: 0 auto;
    width: 2.4375rem;
    height: 2.4375rem;
    text-align: center;
    position: relative;

    .mian {
      width: 2.4375rem;
      height: 2.4375rem;
    }

    .tip {
      position: absolute;
      top: 0;
      right: 0;
      width: 1.125rem;
      height: 1rem;
      transform: translate(50%, -50%);
    }
  }

  .title {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #666666;
    margin-top: 0.3125rem;
  }
}
</style>