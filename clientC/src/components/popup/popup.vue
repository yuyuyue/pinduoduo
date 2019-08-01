<template>
  <div class="popup-wrapper" @touchmove.prevent>
    <div class="dialog">
      <slot></slot>
    </div>
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
.popup-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999999;
  background-color: rgba(0, 0, 0, 0.75);

  .dialog {
    position absolute
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>