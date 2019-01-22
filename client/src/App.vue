<template>
  <div id="app">
    <Head/>
    <router-view />
  </div>
</template>

<script>
import Head from './components/Head'
export default {
  name: 'App',
  components: {
    Head
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px auto;
}
</style>
