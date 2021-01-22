import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/Login.vue";
import CreateAccount1 from "./components/CreateAccount1.vue";
import CreateAccount2Seller from "./components/CreateAccount2Seller.vue";
import CreateAccount3Seller from "./components/CreateAccount3Seller.vue";
import CreateAccount2Buyer from "./components/CreateAccount2Buyer.vue";
import Dashbord from "./components/Dashbord.vue";
import Shop from "./components/Shop.vue";
import UserProfil from "./components/UserProfil.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Login,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/createaccount",
		name: "createaccount1",
		component: CreateAccount1,
	},
	{
		path: "/createaccount/seller/step2",
		name: "createaccount1seller2",
		component: CreateAccount2Seller,
	},
	{
		path: "/createaccount/seller/step3",
		name: "createaccount1seller3",
		component: CreateAccount3Seller,
	},
	{
		path: "/createaccount/buyer/step2",
		name: "createaccountbuyer2",
		component: CreateAccount2Buyer,
	},
	{
		path: "/admin",
		name: "dashbord",
		component: Dashbord,
	},
	{
		path: "/admin/shop",
		name: "dashbord",
		component: Shop,
	},
	{
		path: "/admin/newslettres",
		name: "dashbord",
		component: Dashbord,
	},
	{
		path: "/admin/blog",
		name: "dashbord",
		component: Dashbord,
	},
	{
		path: "/admin/profiluser",
		name: "userprofil",
		component: UserProfil,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
