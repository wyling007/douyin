
export default {
  data() {
    return {
      b: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {

  },
  components: {
    myHeader: () => import('../../components/header/header.vue')
  }
}