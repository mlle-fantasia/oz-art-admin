<template>
  <div class="dashbord">
    <div class="grid grid-cols-6">
      <div class="col-span-1">
      <Navigation/>
      </div>
      <div class="col-span-5 p-10">
          <div>
            <h1 class="font-bold mb-4">Les produits</h1>
          </div>
          <div class="grid grid-cols-6 gap-4">
                        
                <div class="col-span-4">
                    <div class="grid grid-cols-6 gap-4 my-3">
                        <!-- Chiffres -->
                        <div  class="card-chiffre bg-vert ">
                            <div class="text-4xl font-bold">{{products.length}}</div>
                            <div class="text-lg ">produits</div>
                        </div>
                        
                    </div>

                    <div class=" mt-4 p-8 bg-white rounded ">
                        <!-- Formulaire ajouter un produit -->
                        <button v-if="!showProductForm" type="button" @click="showProductForm = true" class="btn btn-primary">Ajouter un produit</button>
                        <div v-if="showProductForm">
                            <h2>{{productSelected._id ?'Edition d\'un produit':'Nouveau produit'}}</h2>
                            <form @submit="saveProduct" id="form-user">
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold my-2" for="name">
                                        Nom  
                                    </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" v-model="productSelected.name">
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold my-2" for="description">
                                        Description  
                                    </label>
                                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" rows="6" v-model="productSelected.description"></textarea>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold my-2" for="imgproduct">
                                        Les images  
                                    </label>
                                    <input name="imgproduct" multiple type="file" id="imgproduct" size="40" @change="changeimgProduct"
                                    class="w-full shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    accept="image/png, image/jpeg">
                                    <div class="grid grid-cols-6 mt-2 gap-3" v-if="imgProductInput.length">
                                        <div v-for="(img, index) in imgProductInput" :key="index">
                                            <img :id="'productimg' + index"  :class="index===0?'avatar-selected': ''"
                                                class="rounded avatar-default" :src="img" alt="photo du produit">
                                                <p v-if="index===0" class="text-center">Image principale</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                        <h2>Les caractéristiques</h2>
                                        <div class="grid grid-cols-2 gap-3" v-if="productSelected.characteristics && productSelected.characteristics.length">
                                            <div class="my-2 font-semibold">Caractéristique</div>
                                            <div class="my-2 font-semibold">Valeur</div>
                                        </div>
                                        <div v-for="(item, index) in productSelected.characteristics" :key="index" class="grid grid-cols-2 gap-3 ">
                                            <div>
                                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hauteur" type="text" name="hauteur" v-model="item.key">
                                            </div>
                                            <div>
                                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hauteur" type="text" name="hauteur" v-model="item.value">
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-secondary btn-small mt-2" @click="addCharacteristic(productSelected)">Ajouter caractéristique</button>
                                    <div>

                                    </div>
                                </div>
                                <div class="mt-4">
                                    <button class="btn btn-primary mt-2" type="submit">Enregistrer</button>
                                    <button type="button" @click="cancelAddProduct" class="btn btn-primary-reverse ml-2">Annuler</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div class="col-span-2 mt-4 p-8 rounded bg-white relative">
                    <!-- liste des produits -->
                    <h2 class="mb-2">Vos produits</h2>
                        <div v-for="product in products" :key="product._id">
                            <div class="element-line flex">
                                <div class="flex-grow">
                                <div></div>
                                <div>
                                     {{product.name}} 
                                </div>
                                <div>
                                    {{product.price}}
                                </div>
                                </div>
                                <div class="flex ">
                                    <div @click="editProduct(product)">
                                        <icon class="ml-2 cursor-pointer" color="gray" name="pen"></icon>
                                    </div>
                                    <div @click="deleteProduct(product)">
                                        <icon class="ml-2 cursor-pointer" color="gray" name="trash"></icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
          </div>
      </div>
    </div>
    <MlleDialog
        type="confirm"
        title="Confirmation"
        text="Etes-vous sur de vouloir ce produit ?"
        v-show="showMlleDialog"
        v-model="showMlleDialog"
        btnOk="Supprimer"
        @confirm="confirmDeleteProduct"
    ></MlleDialog>
  </div>
</template>

<script>
import "vue-awesome/icons/pen";
import "vue-awesome/icons/trash";
import Navigation from "./Navigation.vue";
import MlleDialog from "./elements/MlleDialog.vue";
//import MlleFormText from "./elements/MlleFormText.vue";

export default {
  name: "dashbord",
  components: {
    Navigation,MlleDialog
  },
  props: {},
  data(){
    return{
        user:{},
        products:[],
        /// ajouter un produit
        showProductForm:false,
        productSelected:{},
        imgProduct:[],
        imgProductInput:[],
        showMlleDialog:false,
    }
  },
  mounted(){
    this.user = this.$store.state.user;
    console.log('this.user',this.user);
    this.getProducts();
  },
  methods:{
    async getProducts(){
        let response = await this.$axios.get(
            this.$config.server_url + "/admin/shops/" +  this.user.shop + "/products",
        );
        this.products = response.data.products
    },
    addCharacteristic(product){
        product.characteristics.push({key:"", value:""})
    },
    editProduct(product){
        this.productSelected = product;
        this.showProductForm = true;
    },
    deleteProduct(product){
        this.productSelected = product;
        this.showMlleDialog = true;
    },
    async confirmDeleteProduct(){
        let response = await this.$axios.delete(
        this.$config.server_url + "/admin/products/" +  this.productSelected._id ,
      );
      if(response.data.err){
            this.notify("error", response.data.errtxt)
        }else{
            this.notify("success", 'Produit bien supprimé')
            this.getProducts();
        }
        this.productSelected = {}
        
    },
    cancelAddProduct(){
        this.showProductForm = false;
        this.productSelected = {}
        this.imgProduct = []
      },
    changeimgProduct(event){
        this.imgProductInput = []

        for (let i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i];
            //this.avatarUrl = event.target.files[0]
            let reader = new FileReader();
            let me = this;
            reader.onload = (function(wthef) {
                console.log('wthef',wthef);
                return function(e) {
                    me.imgProductInput.push(e.target.result) 
                };
            })(file);
            reader.readAsDataURL(file);
        }
        console.log('this.imgProductInput',this.imgProductInput);
    },

    async saveProduct(event){
        event.preventDefault();
        let response;
        // verifier le tableau de caractéristiques
        let indexsToDelete = []
        for (let i = 0; i < this.productSelected.characteristics.length; i++) {
            const item = this.productSelected.characteristics[i];
            if(!item.key)indexsToDelete.push(i);
        }
        for (let j = 0; j < indexsToDelete.length; j++) {
            const index = indexsToDelete[j];
            this.productSelected.characteristics.splice(index, 1);
        }
        //
        if(this.productSelected._id){
            response = await this.$axios.put(
                this.$config.server_url +
                "/admin/products/" + this.productSelected._id,
                  this.productSelected
            );
        }else{
             response = await this.$axios.post(
                this.$config.server_url +
                "/admin/shops/"+ this.user.shop + "/products",
                  this.productSelected
            );
            console.log('response',response);
        }
        if(response.data.err){
          this.notify("error", response.data.errtxt)
        }else{
            if(this.imgProductInput.length){
                await this.saveImgProduct(this.productSelected._id)
            }
            this.notify("success", 'Produit bien enregistré')
            this.cancelAddProduct();
            this.getProducts();
        }
    },
    async saveImgProduct(productId){
        console.log('je passe');
        let formData = new FormData();
        for (let i = 0; i < this.imgProductInput.length; i++) {
            formData.append("images", this.imgProductInput[i]);
        }
        let response = await this.$axios.post(
            this.$config.server_url +
            "/products/" + productId + "/images/",
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
