<template>
  <div class="info-bar">
    <div class="infobar-item"><span>@{{upData.nickname}}</span></div>
    <div class="infobar-item"><span>房间号:{{upData.room_id}}</span></div>
    <div class="infobar-item music-item">
      <span class="iconfont icon-icon-test"></span>
      <div class="music-name">
        <span :data-text='upData.room_name'>{{upData.room_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props:{
    upData:{
      type:Object
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
.info-bar {
  color: #ffffff;
  font-size: 16px;
  padding: 10px;
}
.infobar-item {
  padding: 5px 0;
}
.icon-icon-test {
  margin-right: 5px;
}
.music-item{
    display: flex;
}
.music-name{
    width: 150px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
}
.music-name span{
    display: inline-block;
    animation: mymove 5s linear infinite;
}
.music-name span:after{
    content: attr(data-text);
    margin-left: 40px;
}
@keyframes mymove{
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(calc(-50% - 20px));
    }
}
</style>
