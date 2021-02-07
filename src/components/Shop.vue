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
                    <form @submit="saveName" id="form-user">
                          <div>
                              <label class="block text-gray-700 text-sm font-bold my-2" for="name">
                                  Nom  
                              </label>
                              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" v-model="shop.name">
                          </div>
                          <div>
                              <label class="block text-gray-700 text-sm font-bold my-2" for="description">
                                  Description  
                              </label>
                              <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" v-model="shop.description"></textarea>
                          </div>
                          <div>
                              <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
                          </div>
                    </form>
                      
                  </div>

            <div class=" mt-4 p-8 bg-white rounded ">
                <form @submit="saveCoordonee" id="form-user">
                <div class="text-xl font-semibold mb-3">Coordonnées  de la boutique</div>  
                <div>
                
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold my-2" for="Email">
                                Email 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name="email" v-model="shop.email">
                            <div class="text-sm">votre email</div>
                        </div>
                       <!--  <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="tel">
                                Téléphone 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tel" type="phone" name="tel" v-model="shop.phone">
                        </div> -->
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold my-2" for="address1">
                                Adresse 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address1" type="text" name="address1" v-model="shop.address1">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold my-2" for="address2">
                                Ligne complémentaire
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address2" type="text" name="address2" v-model="shop.address2">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold my-2" for="zip">
                                Code postal 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" name="zip" v-model="shop.zip">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold my-2" for="city">
                                Ville
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" name="city" v-model="shop.city">
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
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
                            <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
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
    changeAvatarInput(event){
        this.avatarDefaultSelected = "";
        this.avatarInputSelected = event.target.files[0]
        this.avatarUrl = event.target.files[0]
        let reader = new FileReader();
        let me = this;
        reader.onload = (function(wthef) {
            console.log('wthef',wthef);
            return function(e) {
                me.avatarInputSelectedBinary = e.target.result
            };
        })(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
    },
    async saveAvatar(event){
        event.preventDefault();
        let formData = new FormData();
        formData.append("avatarfile", this.avatarInputSelected);
        let response = await this.$axios.post(
            this.$config.server_url +
            "/users/edit/avatar/"+ this.user._id,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        
        );
        console.log('response.data',response.data);
        if(response.data.err){
          this.notify("error", response.data.errtxt)
        }else{
          this.notify("success", 'L\'avatar a bien été enregistré')
        }
    },
    saveCoordonee(event){
      event.preventDefault();
      let data = this.shop;
      this.saveShop(data);
    },
    saveName(event){
      event.preventDefault();
      let data = {
        name : this.shop.name,
        description : this.shop.description,
      }
      this.saveShop(data);
    },
    async saveShop(data){
      let response = await this.$axios.put(
          this.$config.server_url +
          "/admin/shops/"+ this.shop._id,
            data
      );
        if(response.data.err){
          this.notify("error", response.data.errtxt)
        }else{
          this.notify("success", 'Infos boutique bien enregistrées')
        }
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
