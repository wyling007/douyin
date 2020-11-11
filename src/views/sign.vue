<template>
  <div class="sign">
    <div class="sign-header">
      <router-link
        tag='span'
        class="iconfont icon-guanbi"
        to='/index'
      ></router-link>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>登录后即可展示自己</h2>
        <p>登陆即表明同意<a href="">用户协议</a>和<a href="">隐私政策</a></p>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input
            type="text"
            class="inp-user"
            placeholder="请输入邮箱"
          >
        </div>
        <div class="inp">
          <input
            type="text"
            class="inp-user"
            placeholder="请输入验证码"
          >
          <button @click="getEmailKey($event.target)">{{keyText}}</button>
        </div>
      </div>
      <div class="not-sign">
        <p>未注册的邮箱验证通过后将自动登陆</p>
      </div>
      <div class="code-btn">
        <button class="load-btn"><div class="loads"></div>登陆</button>
      </div>
      <div class="other">
        <router-link
          tag='a'
          to='/sign2'
        >密码登陆</router-link>
        <a
          href=""
          @click.prevent="show"
        >其他方式登陆</a>
      </div>
    </div>
    <transition name='up'>
      <div
        class="mask"
        v-if="showMask"
      >
        <div class="oauth">
          <ul>
            <li class="oauth-item">今日头条登陆</li>
            <li class="oauth-item">QQ登陆</li>
            <li class="oauth-item">微信登陆</li>
            <li class="oauth-item">微博登陆</li>
            <li
              @click="show"
              class="oauth-item oauth-bottom"
            >取消</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      showMask: false,
      keyTimer: null,
      keyText:'获取验证码'
    };
  },
  methods: {
    show() {
      this.showMask = !this.showMask;
    },
    getEmailKey(e) {
      this.$toast({
        message:'获取验证码',
        type:'error',
        duration:3000
      })
      e.disabled = true;
      this.keyText=60;
      this.keyTimer = setInterval(() => {
        this.keyText--;
        if(this.keyText<=0){
          this.keyText='重新获取验证码'
          e.disabled = false;
          clearInterval(this.keyTimer);
        }
      }, 1000);
    }
  },
  destroyed() {
    clearInterval(this.keyTimer);
  },
  components: {}
};
</script>

<style scoped lang="css">
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter,
.up-leave-to {
  opacity: 1;
  transform: translateY(100%);
}
.sign {
  padding: 30px;
}
.sign a {
  text-decoration: none;
}
.sign-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sign-header .iconfont {
  font-size: 30px;
}
.sign-content {
  padding: 20px 15px;
}
.des h2 {
  font-size: 20px;
  font-weight: bold;
}
.des p {
  font-size: 14px;
  line-height: 5px;
  color: #ccc;
}
.des p a {
  color: #628db8;
  padding: 0 5px;
}
.sign-box {
  display: flex;
  height: 100px;
  width: 100%;
  background-color: #f9f9f9;
  flex-direction: column;
}
.inp {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.inp-user {
  flex: 2;
  height: 45px;
  background-color: #f9f9f9;
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  caret-color: #fe2c55;
}
.inp button {
  height: 45px;
  min-width: 100px;
}
.not-sign {
  font-size: 14px;
  line-height: 5px;
  color: #ccc;
}
.code-btn {
  color: rgb(114, 107, 107);
}
.code-btn button {
  margin: 10px 0;
  height: 40px;
  width: 100%;
  color: rgb(250, 248, 248);
  background-color: rgb(247, 16, 16);
  border: none;
}
.other {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.oauth {
  /* height: 350px; */
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f5f5f5;
  text-align: center;
  overflow: hidden;
}
.oauth ul {
  padding-left: 0px;
  margin: 0;
}
.oauth-item {
  border-bottom: 1px #f5f5f5 solid;
  line-height: 60px;
  list-style-type: none;
  background-color: #fff;
  /* text-align: center; */
}
.oauth-bottom {
  border-top: 1px #f5f5f5 solid;
  margin-top: 10px;
}
.load-btn{
  display: flex;
  justify-content: center;
  align-items: center;
}
.loads{
  width: 12px;
  height: 12px;
  border: 3px solid #ffffff;
  border-bottom: 3px #eee solid;
  border-radius: 50%;
  animation: load 1s infinite linear;
  margin-right: 10px;
  /* display: none; */
}
@keyframes load {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
