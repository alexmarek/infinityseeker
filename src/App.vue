<template>
  <div id="app">
    <app-menu/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

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

<style lang="scss">
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-weight: 300;
}

ol, ul {
  list-style: none;
}
a {
  text-decoration: none;
  transition: opacity 0.15s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
}

.page{
  max-width: 800px;
  margin: auto;
}

img {
  max-width: 100%;
  height: auto;
}
h1, h2, h3 {
  margin: 2rem 1rem 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
</style>
