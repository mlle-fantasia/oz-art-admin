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
                  <div class="admin-card">
                      <div>
                          <MlleFormText
                            id="shop_name"
                            type="text"
                            :canEdit="true"
                            v-model="shop.name"
                          />
                        <!-- {{shop.name}} -->
                      </div>
                      <div>
                        {{shop.description}}
                      </div>
                  </div>
              </div>
              <div class="col-span-2">
                  <div class="admin-card"></div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import MlleFormText from "./elements/MlleFormText.vue";

export default {
  name: "dashbord",
  components: {
    Navigation, MlleFormText
  },
  props: {},
  data(){
    return{
      user:{},
      shop:{}
    }
  },
  async mounted(){
    this.user = JSON.parse(localStorage.getItem("user"));
    let response = await this.$axios.get(
        this.$config.server_url + "/admin/shops/" +  this.user.shop,
      );
      this.shop = response.data.shop
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
