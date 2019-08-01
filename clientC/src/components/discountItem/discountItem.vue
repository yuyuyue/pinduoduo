<template>
  <div class="wrapper">
    <img :src="info.imgSrc">
    <p class="discount">{{info.discount}}折</p>
  </div>
</template>

<script>
export default {
  props: ["info"],
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
  width: 3.375rem;
  height: 3.375rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    border-radius: 0.25rem;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 0.0625rem solid #e0e0e0;
    transform-origin: 0 0;
    transform: scale(0.5);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.125rem;
  }

  .discount {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.75rem;
    line-height: 0.75rem;
    padding: 0 0.3125rem;
    margin: 0;
    font-size: 0.6875rem;
    text-align: center;
    white-space: nowrap;
    color: #7e4500;
    border-radius: 0 0.125rem 0 0;
    background: linear-gradient(90deg, #ffecd4 0, #ffd095);
  }
}
</style>