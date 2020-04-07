import { getCaptcha, leaveMessage } from './leaveMessage.service'

export default {
  components: {},
  data () {
    let validateEmail = (rule, value, callback) => {
      let regex = new RegExp(
        '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$');
      if (value === '' || value === null) {
        return callback(new Error('邮箱不能为空'));
      } else {
        if (!regex.test(value)) {
          return callback(new Error('邮箱格式不正确'));
        } else {
          callback();
        }
      }
    };
    return {
      loading: false,
      codeHtml: null,
      form: {
        nickname: null,
        email: null,
        message: null,
        code: null
      },
      rules: {
        email: [
          { validator: validateEmail, trigger: 'blur' },
        ],
        code: [
          { required: true, message: '验证码不能为空！', trigger: 'blur' },
        ],
        nickname: [
          { required: true, message: '昵称不能为空！', trigger: 'blur' },
        ],
        message: [
          { required: true, message: '昵称不能为空！', trigger: 'blur' },
        ],
      },

    }
  },
  created () {
    this.getCode()
  },
  methods: {
    getCode() { 
      getCaptcha().then(res => {
        if(res) {
          this.codeHtml = res
        }
      }, error => {
        this.$message.error(error)
      });
    },
    // 处理编辑表单
    handleForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          let params = {
            nickname: this.form.nickname,
            email: this.form.email,
            message: this.form.message,
            code: this.form.code
          };
          this.leaveMessage(params);
        } else {
          return false;
        }
      });
    },
    leaveMessage (params) {
      leaveMessage(params).then(res => {
        this.loading = false
            if (res.code === 200) {
              this.$message({
                message: res.msg,
                type: 'success'
              })
              this.resetForm()
            } else {
              this.$message({
                message: res.msg,
                type: 'warning'
              })
            }
      }, error => {
         this.$message({
            message: error,
            type: 'error'
          })
        this.loading = false;
      });
    },
    // 表单内容和验证重置
    resetForm () {
      this.loading = false;
      this.$refs['form'].resetFields();
    },
    init () {
    }
  },
  mounted () {
  }
}