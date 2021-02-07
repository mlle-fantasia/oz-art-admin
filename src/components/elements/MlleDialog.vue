<template>
    <div id="message_dialog" class="container-message-dialog">
        <div class="message-dialog flex flex-col">
            <div class="message-dialog-title text-xl font-semibold p-8 bg-jaune">{{title}}</div>
            <div class="message-dialog-content pl-10 pt-4 flex-grow text-lg">{{text}}</div>
            <div class="message-dialog-footer pb-4 pr-4 flex items-center justify-end">
                <button v-if="type ==='confirm'" class="message-dialog-btn-yes btn btn-primary float-right mt-2 ml-2" @click="cancel" type="button">{{btnCancel}}</button>
                <button class="message-dialog-btn-yes btn btn-primary float-right mt-2 ml-2" @click="confirm"  type="button">{{btnOk}}</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "mlleDialog",
  props: {
      value:Boolean,
      type: String, // confirm | message
      title: String,
      text: String,
      btnOk: {type:String, default:"Ok"}, 
      btnCancel: {type:String, default:"Annuler"},
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
        this.$emit("input", false)
      },
      cancel(){
        this.$emit("input", false)
      }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container-message-dialog {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #3d405b85;
}
.message-dialog {
	background-color: #fff;
	width: 95%;
	margin: auto;
	height: 300px;
	border-radius: 20px;
	position: sticky;
	top: calc((100vh - 300px) / 2);
	box-shadow: 1px 1px 8px 0px #00000082;
}
.message-dialog-title {
	border-radius: 20px 20px 0 0;
}
.message-dialog-content {
	border-bottom: 1px solid #f2cc8fbf;
}
@media (min-width: 768px) {
	.message-dialog {
		width: 80%;
	}
}
@media (min-width: 992px) {
	.message-dialog {
		width: 40%;
	}
}
</style>
