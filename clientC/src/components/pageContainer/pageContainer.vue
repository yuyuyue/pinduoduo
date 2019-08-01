<template>
  <div class="pageWrapper">
    <swiper v-if="swiper" :swiper="swiper"/>
    <entrance-card v-if="entranceCard" :info="entranceCard"/>
    <newExclusive v-if="newExclusive" class="hasMargin" :info="newExclusive"/>
    <discountCard v-if="discounts" class="hasMargin" :info="discounts"/>
    <div class="recommend">
      <div v-for="item in commodity" :key="item.id">
        <recommend v-if="item.recommend" :info="item" class="hasMargin"/>
        <commodity-big-card v-else :info="item"/>
      </div>
    </div>
    <loading/>
  </div>
</template>

<script>
import swiper from "../swiper/swiper";
import entranceCard from "../entranceCard/entranceCard";
import newExclusive from "../newExclusive/newExclusive";
import discountCard from "../discountCard/discountCard";
import commodityBigCard from "../commodityBigCard/commodityBigCard";
import recommend from "../recommend/recommend";
import loading from "../loading/loading";
import { EventBus } from "../../utils/event-bus";
import { get } from "../../API/get";
import { post } from "../../API/post";

export default {
  data() {
    return {
      swiper: [],
      entranceCard: null,
      newExclusive: null,
      discounts: null,
      commodity: []
    };
  },
  created() {
    var result = get(
      "https://www.easy-mock.com/mock/5d122d3a60eec53536e32215/pinduoduo/hot"
    );
    result
      .then(res => {
        return res.text();
      })
      .then(text => {
        let obj = JSON.parse(text).data;
        Object.keys(obj).forEach(key => {
          this[key] = obj[key];
        });
      });
  },
  mounted() {
    EventBus.$on("contentChange", data => {
      console.log(data);
    });
  },
  methods: {},
  computed: {},
  components: {
    swiper,
    entranceCard,
    newExclusive,
    discountCard,
    commodityBigCard,
    recommend,
    loading
  }
};
</script>
<style lang="stylus" scoped>
.pageWrapper {
  background: #f4f4f4;
  margin-bottom: 3.125rem;
}
</style>
