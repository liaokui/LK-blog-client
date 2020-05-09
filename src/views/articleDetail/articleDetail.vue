<template>
  <div id='articleDetail'>
    <div class="content" v-if="isHaS">
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
    <div class="details" v-if="isHaS">
      <div id="detailsContent"
           v-html="article.content"></div>
    </div>
    <div class="noContent" v-if="!isHaS">
      <img src="../../assets/imgs/no_data.png" alt="">
      <p>文章不存在</p>
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
      word-break: break-word;
      line-height: 1.75;
      font-weight: 400;
      font-size: 15px;
      overflow-x: hidden;
      *{
        max-width: 100%;
      }
    }
  }
</style>
<style rel='stylesheet/scss' scoped lang='scss'>
  @import './articleDetail.scss';
</style>
    