<template>
  <div class="me">
    <div
      class="me-top"
      :style="bgPic"
    >
      <div class="menu-box">
        <div class="menu-icon">

        </div>
      </div>
    </div>
    <div class="me-warp">
      <div class="me-content">
        <div class="info">
          <img
            src="../../static/img/xxx.jpg"
            alt=""
          >
          <button class="btn" @click="goEdit">
            编辑资料
          </button>
          <button class="btn">
            +朋友
          </button>
        </div>
        <div class="des">
          <h2>爱学习的孩子</h2>
          <span>斗鱼直播间:2132902</span>
          <p>幸运才努力,幸运才努力,幸运才努力,幸运才努力,幸运才努力</p>
        </div>
        <div class="user-tag">
          <span>23岁</span>
          <span>中国最富垃圾车</span>
          <span>标签</span>
        </div>
        <div class="user-tag2">
          <span><a href="">22</a>获赞</span>
          <span><a href="">21</a>关注</span>
          <span><a href="">22</a>粉丝</span>
        </div>
      </div>
      <div class="me-tab">
        <div class="me-navbar">
          <div
            class="item"
            @click="changeTab(0)"
            :class="indexTab==0?'active':''"
          >作品6</div>
          <div
            class="item"
            @click="changeTab(1)"
            :class="indexTab==1?'active':''"
          >动态7</div>
          <div
            class="item"
            @click="changeTab(2)"
            :class="indexTab==2?'active':''"
          >喜欢66</div>
        </div>
        <div class="tan-warp">
          <div class="tab-con">
            <div
              class="tab-img"
              v-show="indexTab==0"
            >
              <img src="../../static/img/xxx.jpg">
              <img src="../../static/img/xxx.jpg">
              <img src="../../static/img/xxx.jpg">
              <img src="../../static/img/xxx.jpg">
              <img src="../../static/img/xxx.jpg">
            </div>
          </div>
          <div
            class="tab-con"
            v-show="indexTab==1"
          >2</div>
          <div
            class="tab-con"
            v-show="indexTab==2"
          >3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./me.js"></script>
<style src="./me.css" lang="css"></style>

