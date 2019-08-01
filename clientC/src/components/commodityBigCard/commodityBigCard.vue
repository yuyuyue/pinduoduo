<template>
  <div class="wrapper">
    <div class="left">
      <img :src="info.imgSrc">
    </div>
    <div class="right">
      <div class="right-top">
        <p class="title">
          <img :src="info.amazingSrc" alt v-if="info.amazingSrc" class="hot">
          {{info.title}}
        </p>
        <p>
          <span class="special" v-if="info.special">{{info.special}}</span>
        </p>
      </div>
      <div>
        <p class="tips">
          <span v-for="item in info.tips" :key="item.id" class="tip">{{ item }}</span>
        </p>
        <div class="infomation">
          <p class="details">
            <span class="price">
              <span class="icon">￥</span>
              <span class="number">{{info.price}}</span>
            </span>
            <span class="amount">{{info.amount}}</span>
          </p>
          <div class="avatars">
            <div v-for="item in info.lastTwoCustomerAvatar" :key="item.id" class="avatar">
              <img :src="item">
            </div>
          </div>
        </div>
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
  box-sizing: border-box;
  width: 100%;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  background-color: #fff;

  p {
    margin: 0;
  }

  .left {
    flex-shrink: 0;
    flex-grow: 0;
    width: 9.75rem;
    height: 9.75rem;
    margin-right: 0.75rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.3125rem;
    }
  }

  .right {
    flex-grow: 1;
    flex-shrink: 1;
    width: 0;
    height: 9.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 0.875rem;
      line-height: 1.25rem;
      max-height: 2.5rem;
      color: #151516;
      overflow: hidden;

      .hot {
        height: 0.9375rem;
        margin-right: 0.25rem;
        vertical-align: middle;
      }
    }

    .special {
      margin-top: 0.3125rem;
      padding: 0 0.1875rem;
      font-size: 0.6875rem;
      line-height: normal;
      background-image: linear-gradient(135deg, #e9c68c, #f8e2bd 50%, #eaca93 0, #eaca93);
      color: #572600;
    }

    .tips {
      font-size: 0.75rem;
      line-height: 1.1;
      margin: 0.3125rem 0;

      .tip {
        background: rgba(238, 23, 11, 0.08);
        color: rgb(238, 23, 11);
        margin-right: 0.25rem;
        padding: 0 0.125rem;
        border-radius: 0.125rem;
      }
    }

    .infomation {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .details {
        .price {
          color: #e02e24;

          .icon {
            font-size: 0.75rem;
            line-height: 1;
            vertical-align: text-bottom;
            font-weight: lighter;
          }

          .number {
            font-style: 1.125rem;
            line-height: 1;
            font-weight: bold;
          }
        }

        .amount {
          font-size: 0.8125rem;
          font-weight: lighter;
          color: #9c9c9c;
          margin-left: 0.25rem;
        }
      }

      .avatars {
        .avatar {
          display: inline-block;
          width: 1.375rem;
          height: 1.375rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            border: 0.0625rem solid rgb(255, 255, 255);
          }

          &:nth-child(2) {
            img {
              margin-left: -0.375rem;
            }
          }
        }
      }
    }
  }
}
</style>