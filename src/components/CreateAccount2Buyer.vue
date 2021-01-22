<template>
<div class="container mx-auto pt-20 pb-40">
    <h1 class="text-center mb-4 text-md">Quelques informations suplémentaires</h1>

    <div class="mt-4 p-8 bg-creme rounded  cursor-pointer">
      <form id="form_step2" @submit="createAccount2">
      <div class="text-xl font-semibold mb-3"> Avatar </div> 
      <div class="text-md mb-2"> Choisissez un avatar par défault </div> 
      <!-- <input name="avatardefault" type="hidden" id="avatar-default"> -->
      <div class="grid grid-cols-10 gap-6 mb-3">
          <div>
              <img @click="avatarDefaultSelected ='chat.jpg'"
               :class="avatarDefaultSelected==='chat.jpg'?  'avatar-selected' :''" 
               class="rounded-full w-full cursor-pointer avatar-default" 
               src="/images/avatars-default/chat.jpg" alt="photo de profil">
          </div>
          <div>
              <img @click="avatarDefaultSelected ='mer.jpg'" 
              :class="avatarDefaultSelected==='mer.jpg'?  'avatar-selected' :''" 
              class="rounded-full w-full cursor-pointer avatar-default" 
              src="/images/avatars-default/mer.jpg" alt="photo de profil">
          </div>
          <div>
              <img @click="avatarDefaultSelected ='fillepaysage.jpg'" 
              :class="avatarDefaultSelected==='fillepaysage.jpg'?  'avatar-selected' :''" 
              class="rounded-full w-full cursor-pointer avatar-default" 
              src="/images/avatars-default/fillepaysage.png" alt="photo de profil">
          </div>
          <div>
              <img @click="avatarDefaultSelected ='visage1.jpg'" 
              :class="avatarDefaultSelected==='visage1.jpg'?  'avatar-selected' :''" 
              class="rounded-full w-full cursor-pointer avatar-default" 
              src="/images/avatars-default/visage1.jpg" alt="photo de profil">
          </div>
          <div>
              <img @click="avatarDefaultSelected ='poisson.jpg'" 
              :class="avatarDefaultSelected==='poisson.jpg'?  'avatar-selected' :''" 
              class="rounded-full w-full cursor-pointer avatar-default" 
              src="/images/avatars-default/poisson.jpg" alt="photo de profil">
          </div>
      </div>
      <div class="text-md mb-2"> Ou choisissez votre propre avatar</div> 
      <div class="grid grid-cols-2 ">
          <input name="avatar" type="file" id="avatar" size="40"
          class="w-full shadow bg-white appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          accept="image/png, image/jpeg" @change="selectAvatarFile">
      </div>
 

     <div class="text-xl font-semibold mb-2 mt-4">Mes coordonnées </div>  
      <div>
         
          <div class="grid grid-cols-2 gap-4">
              <div>
                
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                      Prénom *
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" name="firstname" v-model="user.firstname">
              </div>
              <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                      Nom *
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" v-model="user.name">
              </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-2">
              <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                      Email *
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

</div>

</template>

<script>
export default {
  name: "createaccount2buyer",
  props: {},
  data(){
      return{
        user:{},
        avatarDefaultSelected:"",
        avatarFileSelected:{}
      }
  },
  async mounted(){
        let response = await this.$axios.post(
        this.$config.server_url +
          "/createaccount/step2/buyerandseller",
        { token:this.$route.query.token }
        );
        if(response.data.err){
           this.$notify({
            group: 'message',
            type: 'error',
            title: 'Inscription',
            text: response.data.errtxt,
          });
          //this.$router.push("/")
        }else{
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("refreshtoken", response.data.data.refreshtoken);
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          this.user=response.data.data.user;
        }
  },
  methods:{
    selectAvatarFile(e){
        let files = e.target.files;
        if (!files.length) return;
        this.avatarFileSelected = e.target.files[0];
    },
    async createAccount2(event){
        event.preventDefault();
        console.log('je passe',);
        if(this.avatarDefaultSelected)this.user.avatardefault = this.avatarDefaultSelected;
        let response = await this.$axios.post(
        this.$config.server_url +
          "/createaccount/step2/buyer",this.user,
        );
        console.log('response',response);
        if(response.data.err){
            this.$notify({
            group: 'message',
            type: 'error',
            title: 'Inscription',
            text: response.data.errtxt,
          });
        }else{
          console.log('this.avatarFileSelected',this.avatarFileSelected);
          if(this.avatarFileSelected && this.avatarFileSelected.name){ 
            let formData = new FormData();
            formData.append("avatarfile", this.avatarFileSelected);
            let response = await this.$axios.post(
              this.$config.server_url + "/createaccount/step2/avatar",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              }
            );
            console.log('response',response);
          }
          this.$notify({
            group: 'message',
            type: 'success',
            title: 'Inscription',
            text: "Votre inscrition est finalisé, bienvenue sur votre espace administrateur",
          });
            this.$router.push("/admin")
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
