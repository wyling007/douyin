<template>
  <div class="videos">
    <video-player
      class="video-player vjs-default-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
export default {
  name: "Videos",
  props: ["videoData"],
  data() {
    return {
      playerOptions: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto",
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4", // 路径
            type: "video/mp4" // 类型
          }
        ],
        poster: this.videoData.room_src, //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      }
    };
  },
  methods:{
    playOrStop:function(){
      if(this.$refs.videoPlayer.player.paused()){
        this.$refs.videoPlayer.player.play();
      }else{
        this.$refs.videoPlayer.player.pause();
      }
    },
    playOrStopB:function(playing){
      if(!playing){
        this.$refs.videoPlayer.player.pause();
      }else{
        this.$refs.videoPlayer.player.play();
      }
    }
  },
  components: {
    // videoPlayer:() => import("vue-video-player")
    videoPlayer
  }
};
</script>

<style>
.videos {
  /* position: absolute; */
  margin: auto;
  /* transform: translate(-50%, -50%); */
}
.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
.video-js .vjs-tech {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}
</style>
