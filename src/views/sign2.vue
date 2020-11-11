<template>
  <div
    class="sign"
  >
    <div class="sign-header">
      <router-link
        tag='span'
        class="iconfont icon-fanhui"
        to='/sign'
      ></router-link>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>邮箱账号密码登陆</h2>
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
            placeholder="请输入密码"
          >
        </div>
      </div>
      <div class="not-sign">
        <p>登陆即表明同意<a href="">用户协议</a>和<a href="">隐私政策</a></p>
      </div>
      <div class="code-btn">
        <button class="load-btn"><div class="loads"></div>登陆</button>
      </div>
      <div class="other">
        忘记了?
        <a href="">找回密码</a>
      </div>
    </div>

  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      signShow: true
    };
  },
  components: {}
};
</script>

<style scoped lang="css">
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
  font-size: 25px;
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
.not-sign p a {
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
  /* justify-content: space-between; */
  padding: 10px 0;
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
