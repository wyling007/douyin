<template>
  <div id="app">
    <transition name='right'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
html{
  height: 100%;
}
#app {
  height: 100%;
}
.right-enter-active{
  transition: all 0.5s;
}
.right-leave-active {
  transition: all 0s;
}
.right-enter{
  opacity: 1;
  transform: translateX(100%);
}
/* .up-leave-to{
  opacity: 1;
  transform: translateX(100%);
} */
</style>
