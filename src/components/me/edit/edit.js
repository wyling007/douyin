import myHeader from '../../../components/header/header.vue'
export default {
  data() {
    return {

    }
  },
  methods:{
    toBack(){
        this.$router.push('/me');
    }
  },
  components: {
    myHeader
  }
}