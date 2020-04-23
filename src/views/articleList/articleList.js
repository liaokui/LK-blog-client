import { getArticleList } from './articleList.service'

export default {
  components: {},
  data () {
    return {
      list: [],
      noMore: false,
      isLoading: true,
      continueLoading: false,
      page: {
        num: 0,
        size: 10,
        total: null,
      },
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取文章列表
    getList(key) {
      if (key === 'load') {
        this.isLoading = false;
        this.continueLoading = true;
      }
      if (key === 'load' && this.list.length >= this.page.total) {
        this.isLoading = false;
        this.noMore = true;
        this.continueLoading = false;
        return true;
      }
      this.page.num++;
      const params = {
        status: 1,
        pageNumber: this.page.num,
        pageSize: this.page.size,
      };
      getArticleList(params).then(res => {
        if (res && res.status === 'success') {
          if (res.data && res.data.list && Array.isArray(res.data.list)) {
            this.list = this.list.concat(res.data.list.map( item => {
              return item
            }))
            this.page.total = res.data.count;
          }4
        }
        this.continueLoading = false;
        this.isLoading = true;
      }, error => {
        this.$message({
          type: 'error',
          message: error,
        });
      });
    },
    handleScroll () {
      const height = document.getElementById('scrollCover').
          querySelector('.el-scrollbar__bar').offsetTop;

      const scrollHeight = document.getElementById('scrollCover').
          querySelector('.is-vertical').
          querySelector('.el-scrollbar__thumb').offsetHeight;

      const scrollDistance = document.getElementById('scrollCover').
          querySelector('.is-vertical').
          querySelector('.el-scrollbar__thumb').
          style.
          transform.
        split('translateY(')[1].split('%')[0] / 100;
      const bottomDistance = height - (scrollHeight * ( 1 + scrollDistance ))
      if (this.isLoading && bottomDistance < 100) {
        this.getList('load');
      }
    },
    init () {
      window.addEventListener('scroll', this.handleScroll, true);
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.init();                                                                              
    });
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  },
}