<template>
<div class="container mx-auto pt-20 pb-40">
    <h1 class="text-center mb-4 text-md">Inscrition : étape 2 sur 3</h1>

    <div class="w-full max-w-4xl mx-auto mt-4 p-8 rounded  cursor-pointer">
      <form @submit="createAccount2">

     <div class="text-xl font-semibold mb-2 mt-4">Informations personnelles</div> 
     <div class="text-md mb-3">Trois champs obligatoires : votre nom et votre prénom et votre email</div> 
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

         
      </div>
      <div class="text-xl font-semibold mb-3 mt-4"> La boutique</div>  
      <div class="text-md mb-3">Deux champs obligatoires : le nom et l'avatar de votre boutique. vous pourrez compléter et personnaliser votre boutique ultérieurement.</div>   
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="avatar">
            Avatar de la boutique *
          </label>
            <input name="avatar" type="file" id="avatar" size="40"
            class="w-full shadow bg-white appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline truncate" accept="image/png, image/jpeg" @change="selectAvatarFile">
        </div>
        <div >
          <div id="img-avatar" class="container-avatar-user avatar-width-150" >
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="shop_name">
                Nom de la boutique *
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shop_name" type="text" name="shop_name" v-model="shop_name">
        </div>
        <div>
           
        </div>
    </div>
      <div>
        <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
      </div>

  </form>
  </div>
</div>

</template>

<script>
export default {
  name: "createaccount2seller",
  props: {},
  data(){
      return{
        user:{},
        shop_name:"",
        avatarFileSelected:{}
      }
  },
  async mounted(){
    console.log('coucou1',);
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
        console.log('coucou2',this.user);
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
        this.user.shop_name = this.shop_name
        let response = await this.$axios.post(
        this.$config.server_url +
          "/createaccount/step2/seller",this.user,
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
          this.$store.commit("set_user", this.user);
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
            if(this.user.type === "seller")this.$router.push("/admin")
            if(this.user.type === "buyer")this.$router.push("/admin/profiluser")
        }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
