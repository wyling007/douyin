<template>
  <div class="toast-box">
    <transition name="toast">
      <div
        class="toast"
        v-show="show"
        :class="type"
      >
        <p>{{message}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      message: "233333",
      show: true,
      type: ""
    };
  },
  components: {}
};
</script>

<style scoped lang="css">
.toast {
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  padding: 6px 10px;
}
.sucess {
  background-color: rgba(0, 0, 0, 0.5);
}
.error {
  background-color: rgba(230, 27, 27, 0.5);
}
.toast-enter-to,
.toast-leave {
}
.toast-enter-active,
.toast-leave-active {
}
.toast-enter,
.toast-leave-to {
}
</style>
