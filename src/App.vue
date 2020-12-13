<template>
  <div id="app">
    <div class="grid grid-cols-6">
      <div class="">
        <Navigation />
      </div>
      <div class="col-span-5">
        <Dashbord />
      </div>
    </div>
  </div>
</template>

<script>
import Dashbord from "./components/Dashbord.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Dashbord,
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
