<template>
<div class="container mx-auto pt-20 pb-40">
    <h1 class="text-center mb-4 text-md">Connexion</h1>
    <div class="w-full max-w-md mx-auto">
        <form @submit="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email 
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="email" id="email" type="text" name="email">
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Mot de passe
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="password" id="password" type="password" name="password">
            <!-- <p class="text-red-500 text-xs italic">veillez renseigner un mot de passe.</p> -->
            <a class="inline-block align-baseline font-bold text-sm text-ocre hover:text-fonce" href="#">
              Mot de passe oublié ?
            </a>
          </div>
          <div v-if="alertTxt" class="alert alert-red">
            {{alertTxt}}
          </div>
          <div class="flex items-center justify-end mt-6">
           <router-link class="link-footer" to="/createaccount">
              <button class="btn-primary" type="button">
                S'inscrire
              </button>
            </router-link>
            <button class="btn-primary ml-2" type="submit">
              Se connecter
            </button>
          </div>
        </form>
      </div>
</div>

</template>

<script>
export default {
  name: "login",
  props: {},
  data(){
    return{
      email:"marinafront2@gmail.com",
      password:"pass123",
      alertTxt:""
    }
  },
  mounted(){

  },
  methods:{
   async login(event){
      event.preventDefault();
      if(!this.email || !this.password) return;
      let response = await this.$axios.post(
        this.$config.server_url +
          "/admin/login/",
        { email: this.email, password: this.password }
      );
      if(response.data.err){
        this.alertTxt = response.data.errtxt;
      }else{
        console.log('response.data.data',response.data.data);
        let data = {
          token : response.data.data.token,
          refreshtoken : response.data.data.refreshtoken,
          user : response.data.data.user
        }
        this.$store.commit("set_connexion", data);
        if(this.$store.state.user.type === "seller")this.$router.push("/admin")
        if(this.$store.state.user.type === "buyer")this.$router.push("/admin/profiluser")
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
