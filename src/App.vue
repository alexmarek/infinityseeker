<template>
  <div id="app">
    <app-menu/>
    <router-view/>
  </div>
</template>

<script>
import menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    appMenu: menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
