<template>
  <div class="right-bar">
    <!-- <div class="rightbar-item">
      <div class="avatar-border">
        <img
          src="../../static/img/xxx.jpg"
          alt=""
        >
        <div class="jia">
          <span class="iconfont icon-jia"></span>
        </div>
      </div>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-aixin_shixin"></span>
      <p>18.0W</p>
    </div> -->
    <div
      class="item-icon"
      @click="showComment()"
    >
      <span class="iconfont icon-tubiaozhizuo-"></span>
      <p>{{dumpData}}</p>
    </div>
    <!-- <div class="item-icon">
      <span class="iconfont icon-iconfontfenxiang"></span>
      <p>18.0W</p>
    </div> -->
    <div class="rightbar-item">
      <div class="right-music">
        <img
          src="../../static/img/xxx.jpg"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dumpData'],
  data() {
    return {};
  },
  methods: {
    showComment() {
      this.$emit("showComment");
    }
  },
  components: {}
};
</script>

<style scoped lang="css">
.right-bar .rightbar-item {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-border {
  position: relative;
  height: 50px;
  width: 50px;
  border: 1px #fff solid;
  border-radius: 50%;
  text-align: center;
}
.avatar-border img {
  width: 49px;
  height: 49px;
  border-radius: 50%;
}
.avatar-border .jia {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
}
.avatar-border .icon-jia {
  font-size: 18px;
  line-height: 18px;
  color: #fe2c5a;
}
.right-bar .item-icon {
  text-align: center;
  height: 60px;
  padding-top: 12px;
}
.item-icon .iconfont {
  color: #fff;
  font-size: 30px;
}
.item-icon p {
  color: #fff;
  font-size: 10px;
}
.right-music {
  height: 54px;
  width: 54px;
  background: #2e2e2e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: round 6s 0s linear infinite;
}
.right-music img {
  width: 55%;
  border-radius: 50%;
  height: 55%;
}
@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
