<template>
  <div class="dashbord">
    <div class="grid grid-cols-6">
      <div class="col-span-1">
      <Navigation/>
      </div>
      <div class="col-span-5 p-10">

          <h1 class="text-xl font-bold">Tableau de bord</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "dashbord",
  components: {
    Navigation
  },
  props: {},
  data(){
    return{
      user:{}
    }
  },
  async mounted(){
    this.user = this.$store.state.user;
    console.log('user',this.user);
    if(this.$store.state.user.type === "buyer"){
      this.$router.push("/admin/profiluser");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
