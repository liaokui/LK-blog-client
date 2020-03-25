<template>
  <div id='main'>
    <header>
      <div class="header clearfix">
        <div class="logo">
          <p>LK-blog</p>
        </div>
        <el-menu :default-active="routerIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <!-- <el-menu-item index="home">
            <router-link :to="{'path': '/'}">首页</router-link>
          </el-menu-item> -->
          <el-menu-item index="article">
            <router-link :to="{'path': '/'}">文章</router-link>
          </el-menu-item>
          <el-menu-item index="project">
            <router-link :to="{'path': '/projectList'}">项目</router-link>
          </el-menu-item>
          <el-menu-item index="introduct">
            <router-link :to="{'path': '/introduct'}">简介</router-link>
          </el-menu-item>
          <el-menu-item index="leaveMessage">
            <router-link :to="{'path': '/leaveMessage'}">留言</router-link>
          </el-menu-item>
          <el-menu-item class="githubLink">
            <a href="https://github.com/liaokui"
               target="_blank">
              <i class="iconfont icongithub linkIcon"></i>
            </a>
          </el-menu-item>
        </el-menu>
      </div>
    </header>
    <section>
      <div class="content clearfix">
        <div class="left">
          <router-view></router-view>
        </div>
        <div class="right">
          <div class="author">
            <p class="title">关于作者</p>
            <div class="box">

            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <p>这是一段描述文字</p>
    </footer>
  </div>
</template>
<script>
  import index from './main'
  export default index
</script>
<style rel='stylesheet/scss' scoped lang='scss'>
@import './main.scss';
</style>