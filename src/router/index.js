import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import UserAdd from '../components/UserAdd.vue'
import UserEdit from '../components/UserEdit.vue'
import Users from '../components/Users.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/users/new',
      name: 'UserAdd',
      component: UserAdd
    },
    {
      path: '/users/:id/edit',
      name: 'UserEdit',
      component: UserEdit
    },
    {
      path: '/users/:id',
      name: 'User',
      component: User
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]

  // const router = new VueRouter({
  //   mode: 'history',
  //   base: process.env.BASE_URL,
  //   routes
  // })

})