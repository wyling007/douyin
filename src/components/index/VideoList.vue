<template>
  <div>
    <swiper :options="swiperOption">
      <!-- 幻灯内容 -->
      <swiper-slide
        v-for="(item,index) in dataList"
        :key='index'
      >
        <div class="video_warp">
          <videos
            ref="video"
            :videoData='item'
          />
        </div>
        <div class="infobar_warp">
          <InfoBar :upData="item" />
        </div>
        <div
          class="rightbar_warp"
          @click="playAction(page)"
        >
          <RightBar @showComment="showDump" :dumpData='dumpData'/>
        </div>

      </swiper-slide>

    </swiper>
    <!-- 弹幕 -->
    <transition name='up'>
      <component
        :is="'Dump'"
        ref="dump"
        @showComment="showDump"
        @pushData='getData'
        v-show="showComment"
      ></component>
      <!-- <Dump ref="dump" /> -->
    </transition>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Videos from "../../components/index/Video";
import InfoBar from "./InfoBar";
import RightBar from "./RightBar";
import Dump from "./Dump";
export default {
  name: "videoList",
  data() {
    return {
      vh:667,
      page: 0,
      showComment: false,
      swiperOption: {
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoWdith: true,
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.vh, // 高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true,
        on: {
          slideChangeTransitionStart: function() {
            window.VideoListData.playActionB(window.VideoListData.page, false);
            window.VideoListData.page = this.activeIndex;
            window.VideoListData.playActionB(window.VideoListData.page, true);
          },
          click: function() {
            window.VideoListData.playAction(this.activeIndex);
          }
        }
      },
      dataList: [
        {
          id: "1",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        },
        {
          id: "2",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        },
        {
          id: "3",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        },
        {
          id: "4",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        },
        {
          id: "5",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        },
        {
          id: "6",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        }
      ],
      dumpData:0,
    };
  },
  methods: {
    playAction: function(index) {
      this.$refs.video[index].playOrStop();
    },
    playActionB: function(index, playing) {
      this.$refs.video[index].playOrStopB(playing);
    },
    showDump() {
      this.showComment = !this.showComment;
    },
    getData(data){
      this.dumpData=data;
    }
  },
  mounted() {
    window.VideoListData = this;
    // this.playActionB(this.page, true);
    this.$axios.get('/roomApi').then(res=>{
      console.log(res.data)
      this.dataList=res.data.data
    }).catch(err=>{
      console.log("error:"+err)
    })
  },
  computed:{

  },
  components: {
    Swiper, //定义组件
    SwiperSlide,
    Videos,
    InfoBar,
    RightBar,
    Dump
  }
};
</script>

<style scoped lang="scss">
.video_warp {
  /* height: calc(100vh); */
}
.infobar_warp {
  position: absolute;
  bottom: 55px;
  left: 0;
}
.rightbar_warp {
  position: absolute;
  right: 5px;
  bottom: 55px;
  /* background: #000; */

  /* pointer-events: none; */
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
