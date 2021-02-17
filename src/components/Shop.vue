<template>
  <div class="dashbord">
    <div class="grid grid-cols-6">
      <div class="col-span-1">
        <Navigation/>
      </div>
      <div class="col-span-5 p-10">
          <div>
            <h1 class="font-bold mb-4">Boutique</h1>
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
                              <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="6" name="description" v-model="shop.description"></textarea>
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
                <form @submit="saveImage" id="form-avatar">
                <div class="text-xl font-semibold mb-3"> Avatar </div> 
                <div class="text-md mb-2">  Choisissez l'avatar de votre boutique</div> 
            
                    <input data-imgtype="avatar" name="avatar" type="file" id="avatar" size="40" @change="changeImageInput"
                    class="w-full shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            accept="image/png, image/jpeg">
                            <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
            </form>
            </div>
          </div>
          <h2 class="mb-2">Les images</h2>
          
            <form @submit="saveImage" id="form-couv">
              <div class="text-xl font-semibold mb-3"> Image de couverture </div> 
              <div class="text-md mb-2">  Apparaîtra sur la page de votre boutique</div>
              <div :class="{'w-full':true ,'imgs':true, 'couv-height':couvInputSelectedBinary||couvUrl}" :style=" couvInputSelectedBinary ? 'background-image: url(' + couvInputSelectedBinary + ');' : 'background-image: url(' + couvUrl + ');'" >
              </div>
              <input data-imgtype="couv" name="couv" type="file" id="couv" size="40" @change="changeImageInput"
              class="w-full shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    accept="image/png, image/jpeg">
              <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>

            </form>
            <div class="grid grid-cols-2 gap-4">
              <form @submit="saveImage" id="form-gate">
                <div class="text-xl font-semibold mb-3"> Image d'entrée</div> 
                <div class="text-md mb-2">  Apparaîtra sur la page d'accueil du site</div>
                <div :class="{'imgs w-3/6':true, 'gate-height':gateInputSelectedBinary||gateUrl}" :style=" gateInputSelectedBinary ? 'background-image: url(' + gateInputSelectedBinary + ');' : 'background-image: url(' + gateUrl + ');'">
                </div>
                <input data-imgtype="gate" name="gate" type="file" id="gate" size="40" @change="changeImageInput"
                class="w-full shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                accept="image/png, image/jpeg">
                <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
              </form>
              <form @submit="saveImage" id="form-seller">
                <div class="text-xl font-semibold mb-3"> Image de vous</div> 
                <div class="text-md mb-2">  Apparaîtra sur la page de votre boutique</div>
                <div :class="{'imgs':true, 'seller-height':sellerInputSelectedBinary||sellerUrl}" :style=" sellerInputSelectedBinary ? 'background-image: url(' + sellerInputSelectedBinary + ');' : 'background-image: url(' + sellerUrl + ');'">
                </div>
                <input data-imgtype="seller" name="seller" type="file" id="seller" size="40" @change="changeImageInput"
                class="w-full shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                accept="image/png, image/jpeg">
                <div>
                  <label class="block text-gray-700 text-sm font-bold my-2" for="description_seller">
                      Présentez-vous en quelques mots
                  </label>
                  <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description_seller" rows="4" name="description_seller" v-model="shop.description_seller"></textarea>
                </div>
                <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
              </form>
            </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
//import MlleFormText from "./elements/MlleFormText.vue";

export default {
  name: "shop",
  components: {
    Navigation
  },
  props: {},
  data(){
    return{
      user:{},
      shop:{},
      // les images
      avatarInputSelected:null,
      avatarInputSelectedBinary:null,
      avatarUrl:"", 
      couvInputSelected:null,
      couvInputSelectedBinary:null,
      couvUrl:"", 
      gateInputSelected:null,
      gateInputSelectedBinary:null,
      gateUrl:"", 
      sellerInputSelected:null,
      sellerInputSelectedBinary:null,
      sellerUrl:"",
    }
  },
  async mounted(){
    this.user = this.$store.state.user;
    let response = await this.$axios.get(
        this.$config.server_url + "/admin/shops/" +  this.user.shop,
      );
      this.shop = response.data.shop
      this.avatarUrl = this.$config.server_url + this.shop.avatar;
      if(this.shop.img_couv)this.couvUrl = this.$config.server_url + this.shop.img_couv;
      if(this.shop.img_gate)this.gateUrl = this.$config.server_url + this.shop.img_gate;
      if(this.shop.img_seller)this.sellerUrl = this.$config.server_url + this.shop.img_seller;
  },
  methods:{
    changeImageInput(event){
        let type = event.target.dataset.imgtype
        this[type+'InputSelected'] = event.target.files[0]
        this[type+'Url'] = event.target.files[0]
        let reader = new FileReader();
        let me = this;
        reader.onload = (function(wthef) {
            console.log('wthef',wthef);
            return function(e) {
                me[type+'InputSelectedBinary'] = e.target.result
            };
        })(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
    },
    async saveImage(event){
        event.preventDefault();
        let form = event.target.id.split("-")[1];
        console.log('form',form);
        let url = "";
        if(form === "avatar") url = "/users/edit/avatar/"+ this.user._id;
        if(form === "seller"){
          await this.saveDescriptionSeller();
          url = "/admin/shops/"+this.shop._id+"/images/seller";
          }
        if(form === "couv" || form === "gate") url = "/admin/shops/"+this.shop._id+"/images/"+form;
        let formData = new FormData();
        formData.append("image", this[form+'InputSelected']);
        let response = await this.$axios.post(
            this.$config.server_url +
            url ,
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
          this.notify("success", 'Image bien enregistrée')
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
    saveDescriptionSeller(){
      let data = {
        description_seller : this.shop.description_seller,
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
.imgs{
  background-position: center;
  background-size: cover;
}
.couv-height{
  height: 250px;
}
.gate-height{
  height: 420px;
}
.seller-height{
  height: 350px;
}
</style>
