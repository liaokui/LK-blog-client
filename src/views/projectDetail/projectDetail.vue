<template>
  <div id='projectDetail'>
    <div class="content" v-if="isHaS">
      <div class="cover">
        <el-image :src="project.cover"
                  style="width: 100%;height: 360px"
                  :fit="'cover'"
                  :preview-src-list="[project.cover]"></el-image>
      </div>
      <div class="title">
        <p>{{ project.title }}</p>
      </div>
      <div class="info clearfix">
        <span>{{ project.introduction }}</span>
      </div>
      <div class="tag clearfix">
        <el-tag size="mini"
                :type="['', 'success', 'info', 'danger', 'warning'][index % 4]"
                v-for="(tag, index) in project.tagId"
                :key="index">{{ tag.tagName }}</el-tag>
      </div>
      <div class="link clearfix">
        <el-button circle
                   type="info"
                   plain
                   size="mini">
          <a href="https://github.com/liaokui"
             target="_blank">
            <i class="iconfont icongithub linkIcon"></i>
          </a>
        </el-button>
        <el-button circle
                   type="primary"
                   plain
                   size="mini">
          <a href="https://github.com/liaokui"
             target="_blank">
            <i class="el-icon-link"></i>
          </a>
        </el-button>
      </div>
    </div>
    <div class="details" v-if="isHaS">
      <div id="detailsContent"
           v-html="project.content"></div>
    </div>
    <div class="noContent" v-if="!isHaS">
      <img src="../../assets/imgs/no_data.png" alt="">
      <p>项目不存在</p>
    </div>
  </div>
</template>
<script>
  import index from './projectDetail'
  export default index
</script>
<style rel='stylesheet/scss' lang='scss'>
  #projectDetail{
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
@import './projectDetail.scss';
</style>