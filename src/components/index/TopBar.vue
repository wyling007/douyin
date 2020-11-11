<template>
  <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-live"></span>
    </div>
    <div class="middle">
      <div
        class="item"
        @click="changeTop(0)"
      ><span :class="{'active':topIndex==0}">关注</span></div>
      <div
        class="item"
        @click="changeTop(1)"
      ><span :class="{'active':topIndex==1}">推荐</span></div>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      topIndex: 1
    };
  },
  methods: {
    changeTop(index) {
      this.topIndex = index;
    }
  },
  components: {}
};
</script>

<style scoped lang="css">
.top-bar {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 60px;
  font-size: 18px;
  color: #cccccc;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  z-index: 999;

}
.left{
  width: 30%;
  
}
.right {
  width: 30%;
}
.left .icon-live,
.right .icon-sousuo {
  font-size: 24px;
}
.middle {
  width: 40%;
  display: flex;
  justify-items: center;
}
.middle .item {
  flex: 1;
  text-align: center;
}
.middle .item span {
  padding: 10px 0;
}
.middle .item .active {
  color: #ffffff;
  border-bottom: 3px solid #ffffff;
}
.right {
  text-align: right;
}
</style>
