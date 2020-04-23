<template>
  <div id='articleList'>
    <div class="list">
      <div class="article clearfix"
          v-for="(item, index) in list"
          :key="index">
        <div class="info">
          <div class="tip clearfix wordOverFlow">
            <span>{{ item.author }}</span>
            <span class="point">·</span>
            <span>{{ item.createTime | parseTime('{y}-{m}-{d}')}}</span>
          </div>
          <div class="title wordOverFlow">
            <router-link :to="{'path': '/articleDetail', 'query': {'id': item._id}}">
              {{ item.title }}
            </router-link>
          </div>
          <div class="tag clearfix wordOverFlow">
            <el-tag size="mini"
                    :type="['', 'success', 'info', 'danger', 'warning'][tagIndex % 4]"
                    v-for="(tagItem, tagIndex) in item.tagId"
                    :key="'tag' + tagIndex">{{ tagItem.tagName }}</el-tag>
          </div>
        </div>
        <div class="img">
          <router-link :to="{'path': '/articleDetail', 'query': {'id': item._id}}">
            <el-image :src="item.cover" fit="cover"
                      :preview-src-list="[item.cover]"></el-image>
          </router-link>
        </div>
      </div>
    </div>
    <el-collapse-transition>
      <div v-if="continueLoading" class="load">
        <i class="el-icon-loading"></i>
        <span>加载中 ~~</span>
      </div>
    </el-collapse-transition>
    <p v-if="noMore" class="nomore">没有更多了</p>
  </div>
</template>
<script>
  import index from './articleList'
  export default index
</script>
<style rel='stylesheet/scss' scoped lang='scss'>
@import './articleList.scss';
</style>