<template>
<v-app class='green lighten-3'>
  <div id="app">
    <router-view></router-view>
  </div>
</v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    padding-top: 150px;
  }
</style>


