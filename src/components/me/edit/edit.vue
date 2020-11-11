<template>
  <div class="edit">
    <my-header
      title="编辑资料"
      :hasLeft='true'
      @changeBack='toBack'
    ></my-header>
    <div class="edit-warp">
      <div class="ava-box">
        <div class="avatar">
          <img
            src="../../../static/img/xxx.jpg"
            alt=""
          >
          <span
            class="iconfont icon-xiangji"
            @click="$refs.fileBtn.click()"
          ></span>
          <input
            type="file"
            ref="fileBtn"
          >
        </div>
        <p>点击更换头像</p>
      </div>
      <div class="edit-box">
        <div class="edit-item">
          <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
        <div class="edit-item">
            <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
        <div class="edit-item">
            <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
        <div class="edit-item">
            <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
        <div class="edit-item">
            <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
        <div class="edit-item">
            <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
        <div class="edit-item">
            <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
        <div class="edit-item">
            <span class="label">名字</span>
          <span>我的名字<span class="icon">></span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./edit.js'></script>
<style src='./edit.css' lang='css'></style>