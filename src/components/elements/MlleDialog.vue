<template>
    <div id="message_dialog" class="container-message-dialog">
        <div class="message-dialog flex flex-col">
            <div class="message-dialog-title text-xl font-semibold p-10 bg-jaune">{{title}}</div>
            <div class="message-dialog-content pl-10 pt-4 flex-grow">{{text}}</div>
            <div class="message-dialog-footer pb-4 pr-4 flex items-center justify-end">
                <button v-if="type ==='confirm'" class="message-dialog-btn-yes btn-primary float-right mt-2 ml-2" @click="cancel" type="button">{{btnCancel}}</button>
                <button class="message-dialog-btn-yes btn-primary float-right mt-2 ml-2" @click="confirm"  type="button">{{btnOk}}</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "mllformtext",
  props: {
      value:Boolean,
      type: String, // confirm | message
      title: String,
      text: String,
      btnOk: {type:String, delault:"Ok"}, 
      btnCancel: {type:String, delault:"Annuler"},
      width: Number,
  },
  data(){
    return{
      
    }
  },
  mounted(){

  },
  methods:{
      confirm(){
        this.$emit("confirm")
      },
      cancel(){
        this.$emit("input", false)
      }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
