import Vue from 'vue'
import Router from 'vue-router'

const Error = () => import('../views/error/error.vue')
const Main = () => import('../views/main/main.vue')
const ArticleList = () => import('../views/articleList/articleList.vue')
const ArticleDetail = () => import('../views/articleDetail/articleDetail.vue')
const ProjectList = () => import('../views/projectList/projectList.vue')
const ProjectDetail = () => import('../views/projectDetail/projectDetail.vue')
// const Introduct = () => import('../views/introduct/introduct.vue')
const LeaveMessage = () => import('../views/leaveMessage/leaveMessage.vue')



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/articleList',
      children: [
        {
          path: 'articleList',
          name: 'articleList',
          component: ArticleList,
          meta: {
            belong: 'article',
            title: '文章列表'
          },
        },
        {
          path: 'articleDetail',
          name: 'articleDetail',
          component: ArticleDetail,
          meta: {
            belong: 'article',
            title: '文章详情'
          },
        },
        {
          path: 'projectList',
          name: 'projectList',
          component: ProjectList,
          meta: {
            belong: 'project',
            title: '项目列表'
          },
        },
        {
          path: 'projectDetail',
          name: 'projectDetail',
          component: ProjectDetail,
          meta: {
            belong: 'project',
            title: '项目详情'
          },
        },
        // {
        //   path: 'introduct',
        //   name: 'introduct',
        //   component: Introduct,
        //   meta: {
        //     belong: 'introduct',
        //     title: '简介'
        //   },
        // },
        {
          path: 'leaveMessage',
          name: 'leaveMessage',
          component: LeaveMessage,
          meta: {
            belong: 'leaveMessage',
            title: '留言',
            showAuth: false
          }
        }
      ]
    },
    {
      path: '**',
      name: 'error',
      component: Error,
    }
  ]
})

