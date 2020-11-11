export default {
  props:{
    title:{
      type:String,
      required:true
    },
    rightTxt:{
      type:String,
      required:false
    },
    hasRight:{
      type:Boolean,
      required:false
    },
    hasLeft:{
      type:Boolean,
      required:false
    }
  },
  data() {
    return {

    }
  },
  methods:{
    goBack(){
      this.$emit('changeBack');
    }
  },
  components: {

  }
}