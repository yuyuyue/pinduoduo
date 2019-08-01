<template>
  <div class="recommend-wrapper">
    <div class="recommend-top">
      <div class="shop-icon">
        <img :src="info.brandImgSrc">
      </div>
      <div class="shop-detail">
        <p class="shop-name">{{info.shopName}}</p>
        <p class="shop-slogan" :class="{'important': info.slogan.important}">{{info.slogan.content}}</p>
      </div>
      <p class="more">
        查看全部
        <i class="iocn ion-ios-arrow-forward"></i>
      </p>
    </div>
    <div class="recommend-btm">
      <middle-item v-for="item in info.items" :key="item.id" :info="item" class="item"/>
    </div>
  </div>
</template>

<script>
import middleItem from "../middleItem/middleItem";
export default {
  props: ["info"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: { middleItem }
};
</script>
<style lang="stylus" scoped>
.important {
  color: rgb(224, 46, 36) !important;
}

.recommend-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 0.75rem;
  width: 100%;

  p {
    margin: 0;
  }

  .recommend-top {
    display: flex;
    align-items: center;
    height: 4.125rem;
    width: 100%;

    .shop-icon {
      width: 2.625rem;
      height: 2.625rem;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

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
    }

    .shop-detail {
      flex: 1;
      margin-left: 0.625rem;
      line-height: 1.5;

      .shop-name {
        font-size: 0.9375rem;
      }

      .shop-slogan {
        font-size: 0.8125rem;
        color: #9c9c9c;
      }
    }

    .more {
      color: #9c9c9c;
      font-size: 0.875rem;
    }
  }

  .recommend-btm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      width: 32%;
      flex-shrink: 0;
      margin-right: 1%;
    }
  }
}
</style>