<template>
  <div class="comment-warp">
    <div class="comment-list">
      <div class="comment-top">
        <div id="dumpTime">{{date}}</div>
        <div class="number">{{roomid}}
          <span
            ref="dumpState"
            class="iconfont icon-B"
          ></span>
        </div>
        <div
          class="close"
          @click="$emit('showComment')"
        >
          <span class="iconfont icon-guanbi"></span>
        </div>
      </div>
      <div class="comment-body">
        <div
          class="comment-box"
          ref="dumpList"
        >
          <ul class="dump">
            <li
              v-for="item in dumpList"
              :key="item.key"
              :style='"background-image:url("+item.ic+")"'
            >
              <p><img
                  :src="item.level"
                  draggable="false"
                >{{item.nn}}<span>({{item.cst}})</span></p>
              <div>{{item.txt}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roomid: {
      type: [String, Number],
      default: 2132902
    }
  },
  data() {
    return {
      date: new Date().toLocaleString(),
      ws: null,
      dumpList: [
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "2",
          uid: "20563609",
          nn: "xl1994林",
          txt: "？",
          cid: "b9058755c1e54df0e2d0830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar/020/56/36/09_avatar_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_15.png",
          sahf: "0",
          cst: "02:48:18",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          el: "",
          lk: "",
          urlev: "4",
          dms: "3",
          pdg: "31",
          pdk: "71",
          key: "0.5jdimkldx9s1604256498802"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "14",
          uid: "57179337",
          nn: "武魂藍天",
          txt: "666",
          cid: "6edde86ed0424523a7c1830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar/face/201608/12/b82eab88e16724802d7c49593e2eb171_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_25.png",
          sahf: "0",
          cst: "02:48:47",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          el: "eid@A=1500000113@Setp@A=1@Ssc@A=1@Sef@A=0@S/",
          lk: "",
          urlev: "17",
          dms: "6",
          pdg: "29",
          pdk: "13",
          key: "0.l1ovo3g9lke1604256525227"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "2",
          uid: "387108761",
          nn: "用户751460335",
          txt: "亚麻哒",
          cid: "8eacec6e9965404c8ad6830000000000",
          ic: "https://apic.douyucdn.cn/upload/avatar/default/13_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_10.png",
          sahf: "0",
          cst: "02:49:59",
          bnn: "轻语丶",
          bl: "4",
          brid: "101367",
          hc: "4cc7529ff171dde9bfbe839707e37006",
          el: "",
          lk: "",
          urlev: "5",
          dms: "3",
          pdg: "45",
          pdk: "93",
          key: "0.hj25u33w0ep1604256599419"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "2",
          uid: "387108761",
          nn: "用户751460335",
          txt: "阿～～～～",
          cid: "1a911550be204669accd830000000000",
          ic: "https://apic.douyucdn.cn/upload/avatar/default/13_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_10.png",
          sahf: "0",
          cst: "02:50:05",
          bnn: "轻语丶",
          bl: "4",
          brid: "101367",
          hc: "4cc7529ff171dde9bfbe839707e37006",
          el: "",
          lk: "",
          urlev: "5",
          dms: "3",
          pdg: "67",
          pdk: "75",
          key: "0.k4uz88ryqz1604256606098"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "2",
          uid: "166327307",
          nn: "Loyleeee",
          txt: "演技真好",
          cid: "8eacec6e9965404c35d7830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avanew/face/201709/18/13/3edbcd3beefc5393925a7467cd11d65e_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_4.png",
          sahf: "0",
          cst: "02:49:51",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          el: "",
          lk: "",
          urlev: "1",
          dms: "3",
          pdg: "38",
          pdk: "10",
          key: "0.trl1l9j0kc1604256621214"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "1",
          uid: "257605389",
          nn: "打扰剌",
          txt: "1",
          cid: "5ab3e7959f004be755d8830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar_v3/201901/67fde67f15d1ca0ec7139a07e0b7230e_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_23.png",
          sahf: "0",
          cst: "02:51:35",
          bnn: "Fly",
          bl: "13",
          brid: "255329",
          hc: "69eb7805812c5bf720c3401ad26143c6",
          cbid: "831496",
          el: "",
          lk: "",
          urlev: "17",
          dms: "4",
          pdg: "75",
          pdk: "87",
          key: "0.ttfzl97o2bn1604256695253"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "1",
          uid: "353298075",
          nn: "是胖婷",
          txt: "什么情况",
          cid: "8063f29eb91443695ad0830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar_v3/202003/c5d3e2f332a041f8aba71838805f96e0_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_10.png",
          sahf: "0",
          cst: "02:51:35",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          el: "",
          lk: "",
          urlev: "8",
          dms: "5",
          pdg: "58",
          pdk: "8",
          key: "0.cshqzlbn2o1604256696137"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "1",
          uid: "292361090",
          nn: "刀疤宗师",
          txt: "人贩子",
          cid: "3aff7f66ddde40de05cf830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar_v3/201910/054f46d4290744248ab6720a5984b1e8_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_22.png",
          sahf: "0",
          cst: "02:51:50",
          bnn: "大马猴",
          bl: "13",
          brid: "99999",
          hc: "7094bdb067efbb89706bf894ceb8e67c",
          el: "",
          lk: "",
          urlev: "16",
          dms: "5",
          pdg: "52",
          pdk: "18",
          key: "0.x7ycfqj6q61604256710825"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "2",
          uid: "212843317",
          nn: "淡淡的微笑9",
          txt: " ..",
          cid: "3436ecd63ae1496491d3830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar_v3/201807/8af1a4384558577c28d58977e5dead3a_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_29.png",
          sahf: "0",
          cst: "02:52:00",
          bnn: "大马猴",
          bl: "19",
          brid: "99999",
          hc: "7094bdb067efbb89706bf894ceb8e67c",
          el: "",
          lk: "",
          urlev: "13",
          dms: "3",
          pdg: "49",
          pdk: "5",
          key: "0.4zp9zqjk9no1604256721455"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "1",
          uid: "70414667",
          nn: "小黑12581",
          txt: "民间高手春节前能上映吗",
          cid: "36207d6d6ba34fc4f1d2830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avanew/face/201803/545a30d6e18af7d05262fdf8e8f54c2b_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_18.png",
          sahf: "0",
          cst: "02:52:16",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          cbid: "246981",
          el: "",
          lk: "",
          urlev: "15",
          dms: "2",
          pdg: "55",
          pdk: "5",
          key: "0.il201b9b9vq1604256736984"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "1",
          uid: "48151287",
          nn: "璐璐的小可爱",
          txt: "人贩子球球",
          cid: "b9058755c1e54df0f0d7830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar/face/201606/21/84732fa8910cef5df9e98baa8c7bec79_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_7.png",
          sahf: "0",
          cst: "02:52:23",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          el: "",
          lk: "",
          urlev: "2",
          dms: "3",
          pdg: "59",
          pdk: "98",
          key: "0.y3qmhlju8im1604256743006"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "2",
          uid: "350943675",
          nn: "三杠921",
          txt: "[反向烟]自己造孩子自己卖不就行了",
          cid: "34232f91f343472321de830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar_v3/202003/5a7ec12ad92f4c6795deeee16de260e7_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_3.png",
          sahf: "0",
          cst: "02:53:31",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          el: "",
          lk: "",
          urlev: "10",
          dms: "3",
          pdg: "50",
          pdk: "19",
          key: "0.dj8ofjjls0p1604256811354"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "2",
          uid: "533010",
          nn: "婷婷星星撞满怀",
          txt: "不行",
          cid: "d76a7d0844c747856dcd830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar_v3/202008/c072d06156b540b48bbed7fbd642ff9a_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_22.png",
          sahf: "0",
          cst: "02:53:31",
          bnn: "",
          bl: "0",
          brid: "0",
          hc: "",
          el: "",
          lk: "",
          urlev: "15",
          dms: "3",
          pdg: "27",
          pdk: "83",
          key: "0.ui0qgrkzrjn1604256813752"
        },
        {
          type: "chatmsg",
          rid: "2132902",
          ct: "1",
          uid: "5670106",
          nn: "夏天不打烊",
          txt: "不行",
          cid: "2e515913d47249b4d6d5830000000000",
          ic:
            "https://apic.douyucdn.cn/upload/avatar/005/67/01/06_avatar_middle.jpg",
          level:
            "https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_31.png",
          sahf: "0",
          cst: "02:54:13",
          bnn: "小僵尸",
          bl: "19",
          brid: "9999",
          hc: "8ccfd113d28375263b0964c7221773bf",
          cbid: "52877",
          el: "",
          lk: "",
          urlev: "16",
          dms: "3",
          pdg: "33",
          pdk: "6",
          key: "0.vv9ogrykmpf1604256854682"
        }
      ],
      timeID: null,
      timeID2: null
    };
  },
  methods: {
    strToBuffer(str) {
      str = str + "\0";
      var arr = [];
      var topArr = new Uint32Array([str.length + 8, str.length + 8, 689]);
      topArr = new Uint8Array(topArr.buffer);
      str = String.fromCharCode.apply(null, topArr) + str;
      for (var i in str) {
        arr.push(str.charCodeAt(i));
      }
      var tmpUint8Array = new Uint8Array(arr);
      return tmpUint8Array;
    },
    blobToStr(blob, f) {
      var reader = new FileReader();
      reader.readAsText(blob, "utf-8");
      reader.onload = function() {
        f.call(null, reader.result);
      };
    },
    openDump() {
      var _this = this;

      this.ws = new WebSocket("wss://danmuproxy.douyu.com:8503/");
      this.ws.onopen = function() {
        _this.dumpList = [];
        this.send(_this.strToBuffer(`type@=loginreq/`));
        this.send(_this.strToBuffer(`type@=joingroup/rid@=${_this.roomid}/`));

        _this.$refs.dumpState.style.color =
          this.readyState != 1 ? "red" : "green"; //改变连接状态图标颜色
      };

      this.ws.onmessage = function(e) {
        _this.blobToStr(e.data, function(str) {
          // str=String.fromCharCode.apply(null, e.data);
          // console.log(str);

          var arr = str.split("/\0").slice(0, -1); //粘包处理
          for (var i in arr) {
            // console.log(arr[i]);
            var dumpObj = {};
            arr[i]
              .slice(12)
              .split("/")
              .map(function(i) {
                var a = i.split("@=");
                dumpObj[a[0]] = a[1].replace(/@S/g, "/").replace(/@A/g, "@");
              }); //STT反序列化
            // console.log(dumpObj);

            if (dumpObj.type == "chatmsg") {
              dumpObj.key = Math.random().toString(36) + Date.now();
              dumpObj.cst = new Date(parseInt(dumpObj.cst))
                .toTimeString()
                .slice(0, 8);
              dumpObj.ic = `https://apic.douyucdn.cn/upload/${dumpObj.ic}_middle.jpg`;
              dumpObj.level = `https://staticlive.douyucdn.cn/common/douyu/images/userViewUserLevel/m2_${dumpObj.level}.png`;
              _this.dumpList.push(dumpObj); //加入弹幕数组

              if (_this.dumpList.length > 200) {
                _this.dumpList.splice(0, 1);
              } //超过200弹幕时删除一个

              setTimeout(function() {
                _this.$refs.dumpList.scrollTop =
                  _this.$refs.dumpList.scrollHeight; //让弹幕始终显示最新的
              }, 0); //滞后触发 可用.$nextTick代替
            }
          }
        });
      };
    }
  },
  mounted() {
    this.timeID = setInterval(
      function() {
        this.date = new Date().toLocaleString(); //显示时间
        this.$refs.dumpState.style.color =
          this.ws.readyState != 1 ? "red" : "green"; //改变连接状态图标颜色
      }.bind(this),
      1000
    ); //显示时间,改变连接状态图标颜色

    this.openDump();

    this.timeID2 = setInterval(
      function() {
        this.ws.send(this.strToBuffer("type@=mrkl/"));
      }.bind(this),
      45000
    ); //保持心跳
  },
  destroyed() {
    clearInterval(this.timeID);
    clearInterval(this.timeID2);
    if (this.ws != null) {
      this.ws.send(this.strToBuffer(`type@=logout/`));
      this.ws.close();
    }
  },
  watch: {
    roomid() {
      if (this.ws != null) {
        this.ws.send(this.strToBuffer(`type@=logout/`));
        this.ws.close();
      }
      this.openDump();
    },
    dumpList() {
      this.$emit("pushData", this.dumpList.length);
    }
  },
  components: {}
};
</script>

<style scoped lang="css">
.comment-warp {
  position: fixed;
  bottom: 50px;
  left: 0;
  height: 400px;
  /* max-height: 500px; */
  width: 100%;
  background: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 999;
  padding: 10px 10px;
  padding-bottom: 0;
  box-sizing: border-box;
}
.comment-top {
  display: flex;
  align-items: center;
}
.number {
  flex: 1;
  text-align: center;
}
.close {
  padding-right: 0px;
  /* font-size: 30px; */
}
.close .iconfont {
  font-size: 25px;
  color: #666;
}
.comment-body {
  max-width: 450px;
  overflow: auto;
}
.comment-item {
  display: flex;
}
.user-pic img {
  width: 33px;
  height: 33px;
  border-radius: 50%;
}
.item-info {
  margin-left: 10px;
  display: flex;
  flex: 1 1 auto;
}
.comment-box {
  max-width: 100%;
  max-height: 350px;
  /* bottom: 75px; */
  /* border: 2px red solid; */
  /* border-radius: 10px; */
  margin: 10px;
  margin-bottom: 0;
  overflow: auto;
}
.comment-box::-webkit-scrollbar {
  display: none;
}
.dump {
  padding-left: 0px;
}
.dump li {
  list-style: none;
  background: no-repeat left;
  background-size: 30px 30px;
  padding-left: 36px;
  background-position: top left;
  margin: 10px 0;
  margin-bottom: 0;
}
.dump li div {
  background-color: Gray;
  border-radius: 10px;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #000;
  display: inline-block;
}
.dump li p {
  display: flex;
  align-items: center;
  padding: 1px;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 12px;
}
.dump li p img {
  width: 34px;
}
</style>

