<template>
  <div id='articleList'>
    <div class="article clearfix"
         v-for="(item, index) in articleList"
         :key="index">
      <div class="info">
        <div class="tip clearfix wordOverFlow">
          <span>{{ item.author }}</span>
          <span class="point">·</span>
          <span>{{ item.time }}</span>
        </div>
        <div class="title wordOverFlow">{{ item.title }}</div>
        <div class="tag clearfix wordOverFlow">
          <el-tag size="mini"
                  :type="['', 'success', 'info', 'danger', 'warning'][tagIndex % 4]"
                  v-for="(tagItem, tagIndex) in item.tag"
                  :key="'tag' + tagIndex">{{ tagItem.label }}</el-tag>
        </div>
      </div>
      <div class="img">
        <el-image :src="item.cover"
                  :preview-src-list="[item.cover]"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
  import index from './articleList'
  export default index
</script>
<style rel='stylesheet/scss' scoped lang='scss'>
@import './articleList.scss';
</style>