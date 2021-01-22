<template>
  <div id="app"  class="h-full bg-gray-100">
    <div class="">
      <router-view />
    </div>
    <notifications group="message" position="top center"/>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
body{
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
