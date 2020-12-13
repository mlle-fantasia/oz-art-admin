<template>
  <div class="navigation pt-10 bg-gray-100 h-full">
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/' }">Accueil</router-link>
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/shop' }">Boutique</router-link>
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="w-full" :to="{ path: '/newsletter' }"
        >Newsletter</router-link
      >
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/blog' }">Blog</router-link>
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/profiluser' }"
        >Profil utilisateur</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
