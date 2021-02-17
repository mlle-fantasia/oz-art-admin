<template>
  <div class="dashbord">
    <div class="grid grid-cols-6">
      <div class="col-span-1">
      <Navigation/>
      </div>
      <div class="col-span-5 p-10">
          <div>
            <h1 class="font-bold mb-4">Mon panier</h1>
          </div>
          <div class="grid grid-cols-6 gap-4">
                        
              <div class="col-span-4">
                  <div class="mt-4 p-8 rounded bg-white">
                    
                      
                  </div>
              </div>
              <div class="col-span-2 mt-4 p-8 rounded bg-white relative">
                <h2 class="font-bold mb-4">Total de la commande</h2>
                <button class="btn btn-primary mt-2" type="">Passer ma commande</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
//import MlleFormText from "./elements/MlleFormText.vue";

export default {
  name: "panier",
  components: {
    Navigation
  },
  props: {},
  data(){
    return{
      user:{},
      shop:{},
      avatarInputSelected:null,
      avatarInputSelectedBinary:null,
      avatarUrl:"", 
    }
  },
  async mounted(){
    this.user = this.$store.state.user;
    let response = await this.$axios.get(
        this.$config.server_url + "/admin/shops/" +  this.user.shop,
      );
      this.shop = response.data.shop
      this.avatarUrl = this.$config.server_url + this.shop.avatar;
  },
  methods:{


    saveCoordonee(){

    },
    saveName(){

    },
    async saveShop(){

    },
    notify(type, txt, title){
        let title2 = title ? title : "Mise à jour"
        this.$notify({
            group: 'message',
            type: type,
            title: title2,
            text: txt,
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar-absolute {
    left: calc((100% / 2) - 100px);
}
</style>
