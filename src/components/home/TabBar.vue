<template>
  <div class="tab-bar">
    <div
      class="item"
      v-for="(a,i) in bar"
      :key='i'
    >
      <router-link
        tag='span'
        :class="{'active':tabIndex==i,'big':i==2}"
        :to='a.link'
        @click.native="changeTab(i)"
      >{{a.tab}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bar: [
        { tab: "首页", link: "/index" },
        { tab: "熟人", link: "/follow" },
        { tab: "+", link: "/sign" },
        { tab: "消息", link: "/msg" },
        { tab: "我", link: "/me" }
      ],
      tabIndex: 0,
    };
  },
  methods: {
    changeTab: function(b) {
      this.tabIndex = b;
    }
  }
};
</script>
<style scoped>
.tab-bar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  bottom: 0;
  left: 0;
  color: #cccccc;
  font-size: 16px;
  display: flex;
  justify-items: center;
  z-index: 999;
}
.tab-bar .item {
  flex: 1;
  text-align: center;
}
.tab-bar .item .active {
  color: #ffffff;
}
.big {
  font-size: 40px;
}
</style>