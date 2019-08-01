<template>
  <div class="loading-wrapper">
    <div class="loading">
      <div class="container">
        <div class="loading-icon">
          <i class="icon ion-ios-sync"></i>
        </div>
      </div>
      <p>正在加载中...</p>
    </div>
    <p class="moreBtn">
      查看更多推荐商品
      <i class="icon ion-ios-arrow-forward"></i>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {}
};
</script>
<style lang="stylus" scoped>
.loading-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: rotate linear 1s infinite;

      .loading-icon {
        font-size: 2rem;
        line-height: 1;
      }
    }

    p {
      margin-left: 1.25rem;
      font-size: 0.9375rem;
      font-weight: lighter;
      color: #666;
      line-height: 1;
    }
  }

  .moreBtn {
    padding 0.75rem 1.5rem
    border: 0.0625rem solid #e02e24;
    line-height: 1;
    font-size: 0.875rem;
    color: #e02e24;
    border-radius: 0.25rem;
    i{
      margin-left 0.375rem
    }
  }
}

@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
}
</style>