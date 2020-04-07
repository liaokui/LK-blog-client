<template>
  <div id='leaveMessage'>
    <div class="formBox">
      <el-form :model="form"
             :rules="rules"
             ref="form"
             label-width="120px"
             class="form">
        <el-form-item label="昵称:"
                      prop="nickname">
          <el-input v-model="form.nickname"
                    placeholder="请填写昵称"
                    size="max">
          </el-input>
        </el-form-item>
        <el-form-item class="is-required" label="邮箱:"
                      prop="email">
          <el-input v-model="form.email"
                    placeholder="请填写邮箱"
                    size="max">
          </el-input>
        </el-form-item>
        <el-form-item label="留言:"
                      prop="message">
          <el-input type="textarea" v-model="form.message" :autosize="{ minRows: 4, maxRows: 7}"
                    placeholder="请填写留言"
                    size="max">
          </el-input>
        </el-form-item>
        <el-form-item class="is-required" label="验证码:"
                      prop="code">
                      <div class="validateBox clearfix">
          <el-input v-model="form.code"
                    size="max">
                    <template slot="append">
                <span v-html="codeHtml" @click="getCode()"></span>
              </template>
          </el-input>
                      </div>
        </el-form-item>
        <div class="btnGroup">
          <el-button type="primary"
                    :loading="loading"
                    @click="handleForm('form')">确 定
          </el-button>
        </div>
      </el-form>
     </div>
  </div>
</template>
<script>
  import index from './leaveMessage'
  export default index
</script>
<style rel='stylesheet/scss' lang='scss'>
  #leaveMessage {
    .formBox {
      .validateBox {
        .el-input-group__append {
          padding: 0;
        }
      }
    }
  }
</style>
<style rel='stylesheet/scss' scoped lang='scss'>
  @import './leaveMessage.scss';
</style>
