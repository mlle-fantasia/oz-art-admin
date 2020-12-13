import Vue from "vue";
import VueRouter from "vue-router";

import Dashbord from "./components/Dashbord.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "dashbord",
		component: Dashbord,
	},
	{
		path: "/shop",
		name: "dashbord",
		component: Dashbord,
	},
	{
		path: "/newslettres",
		name: "dashbord",
		component: Dashbord,
	},
	{
		path: "/blog",
		name: "dashbord",
		component: Dashbord,
	},
	{
		path: "/profiluser",
		name: "dashbord",
		component: Dashbord,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
