<template>
  <div class="card-wrapper">
    <div class="container">
      <div class="title">品牌特卖</div>
      <div class="special">{{info.special.content}}</div>
    </div>
    <discount-item v-for="item in info.items" :key="item.id" :info="item"/>
  </div>
</template>

<script>
import discountItem from "../discountItem/discountItem";
export default {
  props: ["info"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: { discountItem }
};
</script>
<style lang="stylus" scoped>
.card-wrapper {
  padding: 0.75rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .container {
    margin: 0.5rem 0 0.1875rem;
    height: 2.6875rem;
    display: flex;
    flex-direction: column;
    justify-content space-between

    .title {
      font-size: 1rem;
      color: #151516;
      font-weight: bold;
      line-height: 1;
    }

    .special {
      padding: 0 0.75rem 0 0.3125rem;
      border-radius: 0.125rem;
      font-size: 0.8125rem;
      line-height: 1.3125rem;
      color: #ffffff;
      background: linear-gradient(90deg, #ef4961 0, #ff634a);
    }
  }
}
</style>