import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import New from '@/components/New'

// Vue.use(Router)
// import {store} from '@/assets/store/data-store'
// export default new Router({
//   data(){
//     return{
//       blog: store.getBlogName()
//     }
//   },
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//      {
//       path: '/post/id',
//       name: 'Post',
//       component: Post
//     },
//      {
//       path: '/new',
//       name: 'New',
//       component: New
//     }
//   ]
// })

Vue.use(VueRouter)

const Home = { template: '<div>This is Home</div>' }
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar/:id', name: 'bar', component: Bar }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')