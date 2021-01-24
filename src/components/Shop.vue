<template>
  <div class="dashbord">
    <div class="grid grid-cols-6">
      <div class="col-span-1">
      <Navigation/>
      </div>
      <div class="col-span-5 p-10">
          <div>
            <h1 class="text-xl font-bold mb-4">Boutique</h1>
          </div>
          <div class="grid grid-cols-6 gap-4">
                        
              <div class="col-span-4">
                  <div class="mt-4 p-8 rounded bg-white">
                          <div>
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                  Nom  
                              </label>
                              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" v-model="shop.name">
                          </div>
                          <div>
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                                  Description  
                              </label>
                              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="textarea" name="description" v-model="shop.description">
                          </div>
                      
                  </div>

            <div class=" mt-4 p-8 bg-white rounded ">
                <form @submit="saveCoordonee" id="form-user">
                <div class="text-xl font-semibold mb-3">Mes coordonnées </div>  
                <div>
                
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                                Email 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name="email" v-model="shop.email">
                            <div class="text-sm">votre email</div>
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="tel">
                                Téléphone 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tel" type="phone" name="tel" v-model="shop.phone">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="address1">
                                Adresse 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address1" type="text" name="address1" v-model="shop.address1">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="address2">
                                ligne complémentaire
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address2" type="text" name="address2" v-model="shop.address2">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="zip">
                                Code postal 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" name="zip" v-model="shop.zip">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                                Ville
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" name="city" v-model="shop.city">
                        </div>
                    </div>
                    <div>
                        <button class="btn-primary mt-2" type="submit">Enregistrer</button>
                    </div>
                
                </div>

            </form>
            </div>

              </div>
              <div class="col-span-2 mt-4 p-8 pt-40 rounded bg-white relative">
                <div class="container-avatar-user avatar-width-200 avatar-absolute" :style=" avatarInputSelectedBinary ? 'background-image: url(' + avatarInputSelectedBinary + ');' : 'background-image: url(' + avatarUrl + ');'">
                </div>
                <form @submit="saveAvatar" id="form-avatar">
                <div class="text-xl font-semibold mb-3"> Avatar </div> 
                <div class="text-md mb-2">  Choisissez l'avatar de votre boutique</div> 
            
                    <input name="avatar" type="file" id="avatar" size="40" @change="changeAvatarInput"
                    class="w-full shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            accept="image/png, image/jpeg">
                            <button class="btn-primary mt-2" type="submit">Enregistrer</button>
            </form>
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
  name: "dashbord",
  components: {
    Navigation
  },
  props: {},
  data(){
    return{
      user:{},
      shop:{}
    }
  },
  async mounted(){
    this.user = this.$store.state.user;
    let response = await this.$axios.get(
        this.$config.server_url + "/admin/shops/" +  this.user.shop,
      );
      this.shop = response.data.shop
  },
  methods:{
    changeAvatarInput(){

    },
    saveAvatar(){

    },
    saveCoordonee(){

    },
    saveName(){

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
