<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Blog Posts</h2>
    <div v-for='blog in blogs'>
    <ul>
    <li><router-link to='/post/' tag='li'>{{blog.name}}</router-link></li>
    </ul>
    </div>
    
  </div>
</template>

<script>
import {store} from '../assets/store/data-store'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to our Blog!',
      blogs: store.getBlogs(),
       name: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
