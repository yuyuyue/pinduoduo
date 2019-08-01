<template>
  <div class="middle-item-wrapper">
    <div class="img">
      <img :src="info.imgSrc">
    </div>
    <p class="price">
      <span class="now-price">￥{{info.nowPrice}}</span>
      <span class="old-price">￥{{info.oldPrice}}</span>
    </p>
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
.middle-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 0.125rem;
    }
  }

  .price {
    margin: 0;
    line-height: 2;

    .now-price {
      font-size: 0.875rem;
      font-weight: bold;
      color: #e02e24;
    }

    .old-price {
      font-size: 0.6875rem;
      vertical-align: middle;
      color: #9c9c9c;
      font-weight: lighter;
      text-decoration: line-through;
    }
  }
}
</style>