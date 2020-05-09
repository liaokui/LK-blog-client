import { getProjectDetail } from './projectDetail.service'

export default {
  components: {},
  data () {
    return {
      project: {},
      isHaS: true
    }
  },
  created () {
    if (this.$route.query && this.$route.query.id) {
      this.id = this.$route.query.id;
      this.getDetail();
    } else {
      this.$message({
        message: '无法获取文章ID',
        type: 'warning'
      })
    }
    this.getDetail()
  },
  methods: {
    getDetail () {
      const params = {
        'id': this.id,
        'status': 1,
      }
      getProjectDetail(params).then(res => {
        if (res && res.status === 'success') {
          this.project = res.data
        } else {
          this.isHaS = false
        }
      }, error => {
        this.message.error(error)
        this.loading = false;
      });
    },
    init () {
    }
  },
  mounted () {
  }
}