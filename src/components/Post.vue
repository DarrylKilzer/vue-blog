<template>
  <div class='post'>
  <p>
    <router-link to='/'>Home</router-link>
  </p>
  </div>
</template>

<script>
import {store} from '../assets/store/data-store'
export default{
  name: 'blogs',
  data () {
    return {
      blogs: store.getBlogs(),
      name: '',
      body: ''
    }
  }
}
</script>

<style>

</style>