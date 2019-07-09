import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateArticle from './views/CreateArticle.vue'
import ListArticle from './views/ListArticle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:"/article/list"
    },
    {
      path: '/article/list',
      name: 'list-article',
      component: ListArticle
    },{
      path:"/article/create",
      name:'create-article',
      component:CreateArticle
    }
  ]
})
