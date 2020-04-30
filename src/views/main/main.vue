<template>
  <div id='main'
       class="main">
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
          <!-- <el-menu-item index="introduct">
            <router-link :to="{'path': '/introduct'}">简介</router-link>
          </el-menu-item> -->
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
    <section class="container">
      <el-scrollbar id="scrollCover" class="app-el-scrollbar"
        ref="componentScrollBar">
        <div class="content clearfix">
          <div class="left">
            <router-view></router-view>
          </div>
          <div class="right"
               v-if="showAuth">
            <div class="author">
              <p class="title">关于作者</p>
              <div class="box">
                <div class="clearfix">
                  <div class="avatar">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              :preview-src-list="['https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png']"></el-image>
                  </div>
                  <div class="info">
                    <p>LELK</p>
                    <span>前端程序员</span>
                  </div>
                </div>
                <div class="count">
                  <p>文章数: 10</p>
                  <p>项目数: 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright © 2018 LK. All rights reserved.</p>
        </footer>
        <el-backtop target=".el-scrollbar .el-scrollbar__wrap"
                    :bottom="40"
                    :visibility-height='100'>
          <i class="el-icon-top"></i>
        </el-backtop>
      </el-scrollbar>

    </section>
  </div>
</template>
<script>
  import index from './main'
  export default index
</script>
<style rel='stylesheet/scss' lang='scss'>
#main {
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden;
      .el-backtop i {
        display: block;
        width: 100%;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        line-height: 44px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
<style rel='stylesheet/scss' scoped lang='scss'>
@import './main.scss';
</style>