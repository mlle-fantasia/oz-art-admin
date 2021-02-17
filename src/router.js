import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import axios from "axios";

import Login from "./components/Login.vue";
import CreateAccount1 from "./components/CreateAccount1.vue";
import CreateAccount2Seller from "./components/CreateAccount2Seller.vue";
import CreateAccount3Seller from "./components/CreateAccount3Seller.vue";
import CreateAccount2Buyer from "./components/CreateAccount2Buyer.vue";
import Dashbord from "./components/Dashbord.vue";
import Shop from "./components/Shop.vue";
import Products from "./components/Products.vue";
import UserProfil from "./components/UserProfil.vue";
import Cart from "./components/Cart.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "dashbord",
		component: Dashbord,
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
		name: "shop",
		component: Shop,
	},
	{
		path: "/admin/products",
		name: "products",
		component: Products,
	},
	{
		path: "/admin/newslettres",
		name: "newsletters",
		component: Dashbord,
	},
	{
		path: "/admin/blog",
		name: "blog",
		component: Dashbord,
	},
	{
		path: "/admin/cart",
		name: "cart",
		component: Cart,
	},
	{
		path: "/admin/profiluser",
		name: "profiluser",
		component: UserProfil,
	},
];

const router = new VueRouter({
	routes,
});

router.beforeEach(async (to, from, next) => {
	console.log("beforeEach to et connected : ", to.name, store.state.connected);

	async function autolog() {
		if (!localStorage.getItem("token")) return false;
		if (store.state.connected) return true;

		let response = await axios.post(process.env.VUE_APP_SERVER_URL + "/admin/autologin", {
			token: localStorage.getItem("token"),
		});
		if (response.data.err) {
			localStorage.setItem("token", "");
			return false;
		}

		console.log("response autolog", response.data);

		store.commit("set_user", response.data.data);
		store.commit("set_connected", true);
		return true;
	}

	if (!store.state.connected) await autolog();
	if (to.name !== "login" && !store.state.connected) return next({ path: "/login" });
	if (to.name === "login" && !store.state.connected) return next();
	if (to.name === "login" && store.state.connected) return next({ path: "/" });
	if (!store.state.connected) return next({ path: "/login" });

	return next();
});

/* router.beforeEach(async (to, from, next) => {
	// console.log("to,from", to, from);
	async function autolog() {
		// console.log("store.state.token", store.state.token);
		if (!localStorage.getItem("token")) return false;
		if (store.state.connected) return true;
		console.log('localStorage.getItem("token")', localStorage.getItem("token"));
		try {
			let response = await axios.post(process.env.VUE_APP_SERVER_URL + "/admin/autologin", {
				token: localStorage.getItem("token"),
			});
			if (response.data.err) {
				return false;
			}
			console.log("");
			store.commit("set_user", response.data.data.user);
			return true;
		} catch (error) {
			console.error("ko", error);
			return false;
		}
	}
	console.log("to.name", to.name);
	if (to.name == "resetpass") return next();

	if (to.name != "login" && localStorage.getItem("token")) await autolog();
	if (to.name == "login" && store.state.connected) return next({ path: "/" });
	if (to.name == "login" && !store.state.connected) {
		return next();
	}
	if (!store.state.connected) return next({ path: "/login" });

	return next();
}); */

export default router;
