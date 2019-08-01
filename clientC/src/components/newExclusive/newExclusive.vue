<template>
  <div class="wrapper">
    <div class="top">
      <div class="top-left">
        <div class="title">{{info.title}}</div>
        <div class="line"></div>
        <div class="ticket">券</div>
        <div class="tip">{{info.tip}}</div>
      </div>
      <div class="top-right">
        查看更多
        <i class="iocn ion-ios-arrow-forward"></i>
      </div>
    </div>
    <div class="btm">
      <div class="big">
        <img :src="info.bigImgSrc">
      </div>
      <div v-for="item in info.items" :key="item.id" class="container">
        <div class="small">
          <img :src="item.imgSrc">
        </div>
        <p class="item-title">{{item.title}}</p>
        <p class="price">
          <span class="price-title">新人价</span>
          ￥{{item.price}}
        </p>
      </div>
    </div>
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
  background-color: #fff;
  padding: 0 0.75rem;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.625rem;

    .top-left {
      display: flex;
      align-items: center;

      .title {
        font-size: 1rem;
        font-weight: bold;
        padding-left: 0.25rem;
      }

      .line {
        width: 0.0625rem;
        height: 0.875rem;
        margin: 0 0.5rem;
        background: #9c9c9c;
      }

      .ticket {
        font-size: 0.75rem;
        border-radius: 0.125rem;
        background: #f32109;
        color: #fff;
        line-height: 1rem;
        width: 1.375rem;
        text-align: center;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 0.375rem;
          height: 0.375rem;
          border-radius: 50%;
          background: #fff;
          top: 50%;
          left: 0;
          transform: translate3d(-50%, -50%, 0);
        }

        &::after {
          content: '';
          position: absolute;
          width: 0.375rem;
          height: 0.375rem;
          border-radius: 50%;
          background: #fff;
          top: 50%;
          right: 0;
          transform: translate3d(50%, -50%, 0);
        }
      }

      .tip {
        margin-left: 0.375rem;
        font-size: 0.875rem;
        color: #9c9c9c;
      }
    }

    .top-right {
      color: #9c9c9c;
      font-size: 0.875rem;
    }
  }

  .btm {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.75rem;

    &>div {
      width: 31.5%;
    }

    .big {
      img {
        width: 100%;
        border-radius: 0.5rem;
      }
    }

    .container {
      .small {
        img {
          width: 100%;
          border-radius: 0.5rem;
        }
      }

      & > p {
        text-align: center;
        margin: 0;
      }

      .item-title {
        line-height: 1.8125rem;
        font-size: 0.8125rem;
        color: #151516;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        font-size: 1rem;
        color: #f32109;
        line-height: 1;
        font-weight: bold;

        .price-title {
          font-size: 0.8125rem;
          line-height: 1rem;
          font-weight: normal;
          padding: 0.0625rem 0.1875rem;
          border-radius: 0.125rem;
          color: #fff;
          background: #f32109;
        }
      }
    }
  }
}
</style>