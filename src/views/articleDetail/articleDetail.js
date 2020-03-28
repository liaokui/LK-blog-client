export default {
  components: {},
  data () {
    return {
      article: {
        id: 1,
        title: '项目不知道如何做性能优化？不妨试一下代码分割',
        author: 'LELK',
        time: '2020-03-20',
        tag: [
          {
            label: 'HTML',
            value: 1
          },
          {
            label: 'CSS',
            value: 2
          },
          {
            label: 'JavaScript',
            value: 3
          },
          {
            label: 'Vue',
            value: 4
          },
          {
            label: 'Element-ui',
            value: 5
          },
        ],
        cover: 'https://user-gold-cdn.xitu.io/2020/3/26/171144c4d91ef4b5?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1',
        details: '<p>文章详情!</p>'
      }
    }
  },
  created () {
  },
  methods: {
    init () {
    }
  },
  mounted () {
  }
}