<template>
  <div class="dashbord">
    <div class="grid grid-cols-6">
      <div class="col-span-1">
      <Navigation/>
      </div>
      <div class="col-span-5 p-10">
          <div>
            <h1 class="text-xl font-bold mb-4">Profil utilisateur</h1>
          </div>
          <div class="grid grid-cols-12 gap-4 relative mt-4">
            <div class="container-avatar-user avatar-width-200 avatar-absolute" :style=" avatarInputSelectedBinary ? 'background-image: url(' + avatarInputSelectedBinary + ');' : 'background-image: url(' + avatarUrl + ');'">
            </div>

            <div class="col-span-9 mt-4 p-8 bg-creme rounded cursor-pointer">
                <form @submit="saveUser" id="form-user">
            <div class="text-xl font-semibold mb-20">Mes coordonnées </div>  
                <div>
                
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                                Prénom 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" name="firstname" v-model="user.firstname">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Nom 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" v-model="user.name">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                                Email 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name="email" v-model="user.email">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="tel">
                                Téléphone 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tel" type="phone" name="tel" v-model="user.phone">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="address1">
                                Adresse 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address1" type="text" name="address1" v-model="user.address1">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="address2">
                                ligne complémentaire
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address2" type="text" name="address2" v-model="user.address2">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="zip">
                                Code postal 
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" name="zip" v-model="user.zip">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                                Ville
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" name="city" v-model="user.city">
                        </div>
                    </div>
                    <div>
                        <button class="btn-primary mt-2" type="submit">Enregistrer</button>
                    </div>
                
                </div>

            </form>
            </div>
            <div class="col-span-3 mt-4 p-8 bg-creme rounded  cursor-pointer" >
                <form @submit="saveAvatar" id="form-avatar">
                <div class="text-xl font-semibold mb-3"> Avatar </div> 
        
                <div class="text-md mb-2"> Choisissez un avatar par défault </div> 
                <!-- <input name="avatardefault" type="hidden" id="avatar-default" v-model=""> -->
                <div class="grid grid-cols-3 gap-6 mb-3">
                    <div @click="avatarDefault('chat.jpg')">
                        <img :class="avatarUrl  === '/images/avatars-default/chat.jpg'? 'avatar-selected' :''" id="chat.jpg" 
                        class="rounded-full w-full cursor-pointer avatar-default" src="/images/avatars-default/chat.jpg" alt="photo de profil">
                    </div>
                    <div @click="avatarDefault('mer.jpg')">
                        <img :class="avatarUrl  === '/images/avatars-default/mer.jpg'? 'avatar-selected' :''" id="mer.jpg" 
                        class="rounded-full w-full cursor-pointer avatar-default" src="/images/avatars-default/mer.jpg" alt="photo de profil">
                    </div>
                    <div @click="avatarDefault('fillepaysage.png')">
                        <img :class="avatarUrl  === '/images/avatars-default/fillepaysage.png'? 'avatar-selected' :''" id="fillepaysage.png" class="rounded-full w-full cursor-pointer avatar-default" src="/images/avatars-default/fillepaysage.png" 
                        alt="photo de profil">
                    </div>
                    <div @click="avatarDefault('visage1.jpg')">
                        <img :class="avatarUrl  === '/images/avatars-default/visage1.jpg'? 'avatar-selected' :''" id="visage1.jpg" 
                        class="rounded-full w-full cursor-pointer avatar-default" src="/images/avatars-default/visage1.jpg" alt="photo de profil">
                    </div>
                    <div @click="avatarDefault('poisson.jpg')">
                        <img :class="avatarUrl  === '/images/avatars-default/poisson.jpg'? 'avatar-selected' :''" id="poisson.jpg" 
                        class="rounded-full w-full cursor-pointer avatar-default" src="/images/avatars-default/poisson.jpg" alt="photo de profil">
                    </div>
                </div>
                <div class="text-md mb-2"> Ou choisissez votre propre avatar</div> 
            
                    <input name="avatar" type="file" id="avatar" size="40" @change="changeAvatarInput"
                    class="w-full shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            accept="image/png, image/jpeg">
                            <button class="btn-primary mt-2" type="submit">Enregistrer</button>
            </form>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4  mt-4">
            <div class="mt-4 p-8 bg-creme rounded cursor-pointer">
                <div class="text-xl font-semibold"> Mes boutiques et création préférées </div> 
            </div>
            <div class="mt-4 p-8 bg-creme rounded cursor-pointer">
                <div class="text-xl font-semibold"> Mes newsletters </div> 
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4  mt-4">
            <div class="my-4 p-8 bg-creme rounded cursor-pointer">
                <div class="text-xl font-semibold"> Mon historique d'achat </div> 
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4  mt-4">
             <div class="my-4 p-8 bg-creme rounded cursor-pointer">
                <div class="text-xl font-semibold"> Autres actions </div> 
                <form @submit="deleteUser" id="form_delete">
                    <button id="btn_delete" class="btn-primary mt-2" type="submit">Supprimer mon compte</button>
                </form>
            </div>
        </div>
      </div>
    </div>
    <MlleDialog
        title="Confirmation"
        text="etes-vous sur de vouloir suprimer votre compte ?"
        v-show="showMlleDialog"
        v-model="showMlleDialog"
        btnOk="Supprimer"
        @confirm="confirmDeleteUser"
    ></MlleDialog>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
//import MlleFormText from "./elements/MlleFormText.vue";
import MlleDialog from "./elements/MlleDialog.vue";

export default {
  name: "dashbord",
  components: {
    Navigation, MlleDialog
  },
  props: {},
  data(){
    return{
      user:{},
      avatarInputSelected:null,
      avatarInputSelectedBinary:null,
      avatarDefaultSelected:null,
      avatarUrl:"", 
      showMlleDialog:false,
      
    }
  },
  async mounted(){
    this.getUser();
  },
  methods:{
      async getUser(){
          this.avatarInputSelected =null;
        let userId = JSON.parse(localStorage.getItem("user"))._id;
        let response = await this.$axios.get(
                this.$config.server_url +
                "/users/"+ userId,
            );
        this.user = response.data.data;
        this.avatarUrl = this.$config.server_url+this.user.avatar;
      },
      changeAvatarInput(event){
            this.avatarDefaultSelected = "";
            this.avatarInputSelected = event.target.files[0]
            this.avatarUrl = event.target.files[0]
            
            let reader = new FileReader();
            let me = this;
            reader.onload = (function(thef) {
                console.log('thef',thef);
                return function(e) {
                    me.avatarInputSelectedBinary = e.target.result
                };
            })(event.target.files[0]);
            reader.readAsDataURL(event.target.files[0]);
      },
      avatarDefault(img){
        this.avatarInputSelectedBinary=null;
        this.avatarUrl = "/images/avatars-default/" + img
        this.avatarDefaultSelected = img;
      },
        async saveAvatar(event){
           event.preventDefault();
            console.log('file',this.avatarDefaultSelected, this.avatarInputSelected);
            if(this.avatarDefaultSelected){
                let  data= {avatardefault:this.avatarDefaultSelected,}
                await this.$axios.post(
                    this.$config.server_url +
                    "/users/edit/avatar/"+ this.user._id,
                data
                );
            }
            else{
                let formData = new FormData();
                formData.append("avatarfile", this.avatarInputSelected);
                await this.$axios.post(
                    this.$config.server_url +
                    "/users/edit/avatar/"+ this.user._id,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                
                );
            }
            this.$notify({
                    group: 'message',
                    type: 'success',
                    title: 'Mise à jour',
                    text: 'Votre avatar a bien été enregistré',
                });
                
          },
          async saveUser(){
            event.preventDefault();
            let response = await this.$axios.put(
                this.$config.server_url +
                "/users/edit/"+ this.user._id,
                 this.user
            );
            console.log('resonse',response);
                this.$notify({
                    group: 'message',
                    type: 'success',
                    title: 'Mise à jour',
                    text: 'Vos coordonnées ont bien été enregistrées',
                });
            //this.getUser();
          },
          deleteUser(){
            this.showMlleDialog=true;
          },
          async confirmDeleteUser(){
              event.preventDefault();
               let response = await this.$axios.delete(
                this.$config.server_url +
                "/admin/users/delete/"+ this.user._id,
                this.user
            );
             console.log('response',response);
          }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
