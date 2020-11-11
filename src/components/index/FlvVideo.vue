<template>
  <div class="flvjs">
    <video
      ref="video"
      :autoplay="autoplay"
      controls
      :poster="poster"
    ></video>
  </div>
</template>

<script>
import flvjs from "flv.js";
export default {
  data: function() {
    return {
      flvPlayer: null,
      flvUrl: "../2.flv"
    };
  },
  props: ["roomid", "autoplay", "poster"], //外界传入播放地址
  methods: {
    flv_load() {
      if (flvjs.isSupported()) {
        if (this.flvPlayer != null) {
          this.flvPlayer.unload();
          this.flvPlayer.detachMediaElement();
          this.flvPlayer.destroy();
          this.flvPlayer = null;
        } //清除前一个对象产生的影响

        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: this.flvUrl
        });
        this.flvPlayer.attachMediaElement(this.$refs.video);
        this.flvPlayer.load();
        this.flvPlayer.volume = 0.3;
        this.flvPlayer.play();
      }
    },
    getUrl() {
      this.$axios
        .get(`/flvUrl?roomid=${this.roomid}&`)
        .then(res => {
          console.log(res.data);
          var flvData = res.data;
          if (flvData.error != "0") {
            this.$toast(flvData.msg);
            this.flvUrl = "../2.flv";
          }
          this.flvUrl = flvData.data.rtmp_url + "/" + flvData.data.rtmp_live;
        })
        .catch(err => {
          console.log("error:" + err);
        });
    },
    destroy() {
      if (this.flvPlayer != null) {
        this.flvPlayer.unload();
        this.flvPlayer.detachMediaElement();
        this.flvPlayer.destroy();
        this.flvPlayer = null;
      } //清除前一个对象产生的影响
    }
  },
  watch: {
    flvUrl() {
      this.flv_load();
    }
  },
  mounted() {
    // this.flv_load();
  }
};
</script>

<style scoped lang="css">
.flvjs{
  width: 100%;
}
.flvjs video{
  width: 100%;
}
</style>
