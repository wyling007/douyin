<template>
  <div>
    <TopBar />
    <van-swipe
      class="my-swipe"
      indicator-color="white"
      :style="`height: ${vh}px;`"
      vertical
      @change="change"
    >
      <template #indicator>
        <div class="custom-indicator">
          <!-- {{ page + 1 }}/4 -->
        </div>
      </template>
      <van-swipe-item
        v-for="(item,index) in dataList"
        :key='index'
      >
        <FlvVideo
          :roomid="item.room_id"
          :autoplay="false"
          :poster='item.room_src'
          ref="video"
        />
        <div class="infobar_warp">
          <InfoBar :upData="item" />
        </div>
        <div class="rightbar_warp">
          <RightBar
            @showComment="showDump"
            :dumpData='dumpData'
          />
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 弹幕 -->
    <transition name='up'>
      <Dump
        ref="dump"
        @showComment="showDump"
        @pushData='getData'
        v-show="showComment"
        :roomid="dataList[page].room_id"
      />
    </transition>
  </div>
</template>

<script>
import { Button } from "vant";
import { Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      vh: window.innerHeight - 50,
      dataList: [],
      showComment: false,
      dumpData: 0,
      roomid: 2132902,
      flvUrl: "../2.flv",
      page: 0
    };
  },
  components: {
    [Button.name]: Button,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    InfoBar: () => import("../../components/index/InfoBar.vue"),
    RightBar: () => import("../../components/index/RightBar.vue"),
    TopBar: () => import("../../components/index/TopBar.vue"),
    Dump: () => import("../../components/index/Dump.vue"),
    FlvVideo: () => import("../../components/index/FlvVideo.vue")
  },
  mounted() {
    this.$axios
      .get("/roomApi")
      .then(res => {
        console.log(res.data);
        this.dataList = res.data.data;
      })
      .catch(err => {
        console.log("error:" + err);
      });
    setTimeout(() => {
      this.$refs.video[this.page].getUrl();
    }, 1000);
  },
  methods: {
    showDump() {
      this.showComment = !this.showComment;
    },
    getData(data) {
      this.dumpData = data;
    },
    change(index) {
      console.log(index);
      this.$refs.video[this.page].destroy();
      this.page = index;
      this.$refs.video[index].getUrl();
    }
  }
};
</script>

<style scoped lang="css">
.infobar_warp {
  position: absolute;
  bottom: 5px;
  left: 0;
}
.rightbar_warp {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
.van-swipe {
  /* height: 300px; */
}
.van-swipe-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #39a9ed;
}
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter,
.up-leave-to {
  opacity: 1;
  transform: translateY(100%);
}
</style>
