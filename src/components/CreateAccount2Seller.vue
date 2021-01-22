<template>
<div class="container mx-auto pt-20 pb-40">
    <h1 class="text-center mb-4 text-md">Rejoindre la comunoté OZ art</h1>
    <div class="w-full max-w-md mx-auto">
        <div v-if="inscriptionOk" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          un email vous a été envoyé, <br> veillez verifier cliquer sur le lien qu'il contient pour poursuivre votre inscription
        </div>
        <form action="/createaccount/step1" method="post" novalidate="novalidate"
        onsubmit="return validForm()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">

              
            <!-- message d'alerte s'il y a une erreur -->
              <div v-if="inscriptionKo" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2" role="alert">
                <strong class="font-bold">Il y a une erreur :</strong>
                <span class="block sm:inline">{{error}}</span>
              </div>

            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
              Email 
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="email" id="email" type="text" name="email" >
          </div>
          <div >
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password1" >
              Mot de passe
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="password1" id="password1" type="password" name="password1" >
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password2">
                Répétez le mot de passe
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="password2" id="password2" type="password" name="password2" >
            <!-- <p class="text-red-500 text-xs italic">veillez renseigner un mot de passe.</p> -->
            
          </div>
          <div class="mb-6">
            <div class="shadow btn-radio hover:bg-blue-200">
              <input type="radio" id="buyer" name="type" value="buyer"
                     checked>
              <label class="ml-2" for="buyer">Compte acheteur</label>
            </div>
            
            <div class="shadow btn-radio hover:bg-blue-200">
              <input type="radio" id="seller" name="type" value="seller">
              <label class="ml-2"  for="seller">Compte vendeur</label>
            </div>
          </div>
          <div class="flex items-center justify-end">
           
             <button @click="createAccount" class="btn-primary" type="submit">
                Créer
              </button>
            
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
        inscriptionOk:false,
        inscriptionKo:false,
        email:"",
        password1:"",
        password2:"",
        type:"",
        errTxt:""
      }
  },
  mounted(){

  },
  methods:{
    async createAccount(){
        if(!this.email || !this.password1 || !this.password2){
            this.errTxt="Merci de remplir tous les champs"
        }
        if(this.password1 !== this.password2){
            this.errTxt="Merci d'indiquer des mots de passe identiques"
        }
         let response = await this.$axios.post(
        this.$config.server_url +
          "/createaccount/step1",
        { type:this.type , email: this.email, password: this.password1 }
        );
        if(response.data.err){
            this.alertTxt = response.data.errtxt;
        }else{
            this.$router.push("/admin")
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
