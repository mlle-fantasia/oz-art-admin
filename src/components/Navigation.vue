<template>
  <div class="navigation pt-10 bg-white h-full">
    <div class="py-5 px-10">
      <a :href="this.$config.server_url">Retour site</a>
    </div>
    <div :class="this.$route.name === 'dashbord'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300" v-if="this.$store.state.user.type==='seller'">
      <router-link class="" :to="{ path: '/admin' }">Tableau de bord</router-link>
    </div>
    <div  :class="this.$route.name === 'shop'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300" v-if="this.$store.state.user.type==='seller'">
      <router-link  :to="{ path: '/admin/shop' }">Boutique</router-link>
    </div>
    <div :class="this.$route.name === 'products'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300" v-if="this.$store.state.user.type==='seller'">
      <router-link class="w-full" :to="{ path: '/admin/products' }"
        >Produits</router-link
      >
    </div>
   <!--  <div :class="this.$route.name === 'newsletters'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300" v-if="this.$store.state.user.type==='seller'">
      <router-link class="w-full" :to="{ path: '/admin/newsletter' }"
        >Newsletter</router-link
      >
    </div> -->
    <div :class="this.$route.name === 'blog'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300" v-if="this.$store.state.user.type==='seller'">
      <router-link class="" :to="{ path: '/admin/blog' }">Blog</router-link>
    </div>
    <div :class="this.$route.name === 'profiluser'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin/profiluser' }"
        >Profil utilisateur</router-link
      >
    </div>
    <div :class="this.$route.name === 'basket'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin/profiluser' }"
        >Panier</router-link
      >
    </div>
    <!-- <div :class="this.$route.name === 'messages'? 'link-active': ''" class="py-5 px-10 hover:bg-gray-300">
      <router-link class="" :to="{ path: '/admin/profiluser' }"
        >Messages</router-link
      >
    </div> -->
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
        this.$store.commit("set_connexion", {});
        window.location = this.$config.server_url;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link-active{
  background-color: #eab0a1;
}
</style>
