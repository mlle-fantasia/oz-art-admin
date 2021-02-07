<template>
  <div class="dashbord">
    <div class="grid grid-cols-6">
      <div class="col-span-1">
      <Navigation/>
      </div>
      <div class="col-span-5 p-10">
          <h1 class="font-bold mb-4">Tableau de bord</h1>
          <div class="grid grid-cols-6 gap-4">
                        
                <div class="col-span-4">
                    <div class="grid grid-cols-4 gap-4 my-3">
                        <!-- Chiffres -->
                        <div  class="card-chiffre bg-vert ">
                            <div class="text-4xl font-bold">23</div>
                            <div class="text-lg ">personnes aiment votre boutique</div>
                        </div>
                        <div  class="card-chiffre bg-jaune ">
                            <div class="text-4xl font-bold">18</div>
                            <div class="text-lg ">vous suivent</div>
                        </div>
                        <div  class="card-chiffre bg-creme ">
                            <div class="text-4xl font-bold">5</div>
                            <div class="text-lg ">commandes ce mois ci</div>
                        </div>
                        <div  class="card-chiffre bg-fonce ">
                            <div class="text-4xl font-bold text-white">230</div>
                            <div class="text-lg text-white">euros de chiffre d'affaire ce mois ci</div>
                        </div>
                        
                    </div>

                    <div class=" mt-4 p-8 bg-white rounded ">
                       
                    </div>

                </div>

                <div class="col-span-2 mt-4 p-8 rounded bg-white ">
                    <h2 class="mb-2">Les dernières  commandes</h2>
                    <div >
                    </div>
                </div>
          </div>
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
