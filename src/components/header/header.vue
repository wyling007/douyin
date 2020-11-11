<template>
  <div class="user-header">
    <div class="back" v-if="hasLeft">
      <span class="iconfont icon-fanhui" @click="goBack"></span>
    </div>
    <div class="">
      <span>{{title}}</span>
    </div>
    <div class="right" v-if="hasRight">
      <span>{{rightTxt}}</span>
    </div>
  </div>
</template>

<script src='./header.js'></script>
<style src='./header.css' lang='css'></style>