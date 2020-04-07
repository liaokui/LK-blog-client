<template>
  <div id='projectList'>
    <div class="project clearfix"
         v-for="(item, index) in projectList"
         :key="index">
      <div class="img">
        <router-link :to="{'path': '/projectDetail', 'query': {'id': item.id}}">
          <el-image :src="item.cover"
                    :preview-src-list="[item.cover]"></el-image>
        </router-link>
      </div>
      <div class="info">
        <div class="title wordOverFlow">
          <router-link :to="{'path': '/projectDetail', 'query': {'id': item.id}}">
            {{ item.title }}
          </router-link>
        </div>
        <div class="tip clearfix wordOverFlow">
          <span>{{ item.introduction }}</span>
        </div>
        <div class="tag clearfix wordOverFlow">
          <el-tag size="mini"
                  :type="['', 'success', 'info', 'danger', 'warning'][tagIndex % 4]"
                  v-for="(tagItem, tagIndex) in item.tag"
                  :key="'tag' + tagIndex">{{ tagItem.label }}</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import index from './projectList'
  export default index
</script>
<style rel='stylesheet/scss' scoped lang='scss'>
@import './projectList.scss';
</style>
