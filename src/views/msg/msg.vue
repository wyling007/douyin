<template>
  <div class="message">
    <my-header
      title="消息"
      rightTxt="发起聊天"
      :hasRight='true'
    ></my-header>
    <div class="msg-warp">
      <div class="msg-nav">
        <div class="msg-nav-item">
          <span></span>
          <p>粉丝</p>
        </div>
        <div class="msg-nav-item">
          <span></span>
          <p>赞</p>
        </div>
        <div class="msg-nav-item">
          <span></span>
          <p>@我的</p>
        </div>
        <div class="msg-nav-item">
          <span></span>
          <p>评论</p>
        </div>
      </div>
    </div>
    <div class="msg-list">
      <div class="msg-box" v-for="a in b" :key="a">
        <img
          src="../../static/img/xxx.jpg"
          alt=""
        >
        <div class="user-des">
          <div class="top">
            <span>抖音小助手</span>
            <span class="time">12:10</span>
          </div>
          <div class="bottom">
            <span>抖音小助手消息</span>
            <span class="no-see"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./msg.js'></script>
<style src='./msg.css' lang='css' scoped></style>