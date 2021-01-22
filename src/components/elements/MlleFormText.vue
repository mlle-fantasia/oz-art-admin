<template>
    <div class="">
        <label class="label" :for="id" v-if="label">
            {{label}}
        </label>
        <div v-if="edit" >
            <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="value" :id="id" :type="type" :name="id">
            <span @click="saveInput">
              <icon class="ml-2" color="gray" name="save"></icon>
            </span>
        </div>
        <div v-else >
            <div class="appearance-none py-2 px-3 text-gray-700 leading-tight">
              {{value}} 
              <span @click="editInput">
                <icon class="ml-2" color="gray" name="pen"></icon>
              </span>
            </div>
        </div>
    </div>
</template>

<script>
import "vue-awesome/icons/pen";
import "vue-awesome/icons/save";

export default {
  name: "mllformtext",
  props: {
      value: String,
      label: String,
      type: String, // textarea | text
      canEdit: Boolean, // peut être edité ou non
      id: String,
      maxlength: Number,
      disabled: Boolean,
      placeholder:String
  },
  data(){
    return{
      edit:false
    }
  },
  mounted(){

  },
  methods:{
    editInput(){
      this.edit = true
    },
    saveInput(){
      this.edit = false
       
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
