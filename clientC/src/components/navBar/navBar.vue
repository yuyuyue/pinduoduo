<template>
  <div class="wrapper">
    <div class="container">
      <div
        v-for="item in categories"
        :key="item.id"
        class="item"
        @click="pick"
        :data-item="item"
        :class="{'selected': onSelected === item}"
      >{{ item }}</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../utils/event-bus"
export default {
  data() {
    return {
      categories: [
        "热门",
        "女装",
        "百货",
        "鞋包",
        "食品",
        "母婴",
        "内衣",
        "电器",
        "男装",
        "家具",
        "水果",
        "美妆",
        "手机",
        "家纺",
        "运动",
        "电脑",
        "汽车",
        "家装",
        "医药"
      ],
      onSelected: "热门"
    };
  },
  methods: {
    pick(e) {
      this.onSelected = e.currentTarget.dataset.item;
      EventBus.$emit('contentChange', this.onSelected);
    }
  }
};
</script>

<style lang="stylus" scoped>
.selected {
  color: #e02e24;
  border-bottom: 0.125rem solid #e02e24;
  font-weight: bold;
}

.wrapper {
  padding: 0 0.875rem;

  .container {
    display: flex;
    text-align: center;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    color: #444444;

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      width: 2rem;
      height: 2.625rem;
      font-size: 1rem;
      line-height: 2.625rem;
      flex-shrink: 0;

      &:not(:first-child) {
        margin-left: 1.25rem;
      }
    }
  }
}
</style>

