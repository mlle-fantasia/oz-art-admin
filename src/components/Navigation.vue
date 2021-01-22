<template>
  <div class="navigation pt-10 bg-white h-full">
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin' }">Accueil</router-link>
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin/shop' }">Boutique</router-link>
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="w-full" :to="{ path: '/admin/newsletter' }"
        >Newsletter</router-link
      >
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin/blog' }">Blog</router-link>
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin/profiluser' }"
        >Profil utilisateur</router-link
      >
    </div>
        <div class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin/profiluser' }"
        >Messages</router-link
      >
    </div>
    <div class="py-5 px-10 hover:bg-gray-300">
      <a class="" href="#" @click="disconnect"
        >Se déconnecter</a
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
  methods:{
    disconnect(){
        localStorage.setItem("token","")
        localStorage.setItem("user","")
        window.location = this.$config.server_url;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
