<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/AgoraDemo">AgoraDemo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
a {
  margin-right: 10px;
}
</style>>
