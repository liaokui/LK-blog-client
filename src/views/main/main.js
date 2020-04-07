export default {
  components: {},
  data () {
    return {
      
    }
  },
  computed: {
    routerIndex() {
      return this.$route.meta.belong
    },
    showAuth() {
      let isShowAuth = true
      if (this.$route.meta.showAuth !== undefined && this.$route.meta.showAuth === false) {
        isShowAuth = false
      }
      return isShowAuth
    }
  },
  created () {
    
  },
  methods: {
    handleSelect () {
      
    },
    init () {
    }
  },
  mounted () {
  }
}