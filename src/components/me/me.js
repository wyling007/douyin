module.exports = {
  data() {
    return {
      bgPic:{
        backgroundImage:'url('+require('../../static/img/xxx.jpg')+')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'
      },
      indexTab:0
    }
  },
  methods:{
    changeTab(index){
      this.indexTab=index;
    },
    goEdit(){
      this.$router.push('/edit');
    }
  },
  components: {

  }
}