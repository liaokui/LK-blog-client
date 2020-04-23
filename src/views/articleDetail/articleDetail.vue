<template>
  <div id='articleDetail'>
    <div class="content">
      <div class="cover">
        <el-image :src="article.cover"
                  style="width: 100%;height: 360px"
                  fit="cover"
                  :preview-src-list="[article.cover]"></el-image>
      </div>
      <div class="title">
        <p>{{ article.title }}</p>
      </div>
      <div class="info clearfix">
        <span>{{ article.createTime | parseTime('{y}-{m}-{d}') }}</span>
      </div>
      <div class="tag clearfix">
        <el-tag size="mini"
                :type="['', 'success', 'info', 'danger', 'warning'][index % 4]"
                v-for="(tag, index) in article.tagId"
                :key="index">{{ tag.tagName }}</el-tag>
      </div>
    </div>
    <div class="details">
      <div id="detailsContent"
           v-html="article.content"></div>
    </div>
  </div>
</template>
<script>
  import index from './articleDetail'
  export default index
</script>
<style rel='stylesheet/scss' lang='scss'>
  #articleDetail{
    #detailsContent {
      width: 100%;
      *{
        max-width: 100%;
      }
    }
  }
</style>
<style rel='stylesheet/scss' scoped lang='scss'>
  @import './articleDetail.scss';
</style>
    