<template>
  <div class="wrapper">
    <div
      v-for="item in items"
      :key="item.id"
      class="item"
      @click="tabChange"
      :data-title="item.title"
    >
      <div class="item-icon">
        <img :src="item.title === selectItem ? item.active : item.notActive">
      </div>
      <div class="item-title" :class="{'selected': item.title === selectItem}">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "首页",
          active:
            "//t13img.yangkeduo.com/cart/2018-09-02/4149b41e8ade31e7487e12e372e13d69.png",
          notActive:
            "//t13img.yangkeduo.com/cart/2018-09-02/f4f7bb8e393e08f1bd7a813d27e91c66.png"
        },
        {
          title: "推荐",
          active:
            "//t13img.yangkeduo.com/cart/2018-09-02/de1cbe598f480e54cf6dfe1602ff0c7a.png",
          notActive:
            "//t13img.yangkeduo.com/cart/2018-09-02/2d711f06701926c7cab62b7d0a3fe116.png"
        },
        {
          title: "搜索",
          active:
            "//t13img.yangkeduo.com/cart/2018-09-02/8189bb727c0d7de12476d8485b4b47c3.png",
          notActive:
            "//t13img.yangkeduo.com/cart/2018-09-02/bb0d9124521ad997e4a970c5251a130b.png"
        },
        {
          title: "聊天",
          active:
            "//t13img.yangkeduo.com/cart/2018-09-02/f000638fa810c954ed344293d214bc34.png",
          notActive:
            "//t13img.yangkeduo.com/cart/2018-09-02/40e2c153f09720b43044dfa82f771714.png"
        },
        {
          title: "个人中心",
          active:
            "//t13img.yangkeduo.com/cart/2018-09-02/8d4c80854ebcc4c34628c15f1581527c.png",
          notActive:
            "//t13img.yangkeduo.com/cart/2018-09-02/8d22d9ba476f49fbebb66c8cf0d0aaab.png"
        }
      ],
      selectItem: "首页"
    };
  },
  methods: {
    tabChange(e) {
      this.selectItem = e.currentTarget.dataset.title;
    }
  }
};
</script>

<style lang="stylus" scoped>
.selected {
  color: #e02e24;
}

.wrapper {
  display: flex;

  .item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .item-icon {
      width: 1.4375rem;
      height: 1.4375rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .item-title {
      line-height: 1;
      font-size: 0.75rem;
    }
  }
}
</style>
