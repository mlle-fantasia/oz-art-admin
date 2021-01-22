import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import Notifications from "vue-notification";
Vue.use(Notifications);

import Icon from "vue-awesome/components/Icon";
Vue.component("Icon", Icon);

require("dotenv").config();
const config = {
	server_url: process.env.VUE_APP_SERVER_URL,
};

Object.defineProperty(Vue.prototype, "$axios", { value: axios });
axios.defaults.headers.common["x-auth-accesstoken"] = localStorage.getItem("token");
axios.interceptors.response.use(
	(response) => {
		return response;
	},
	function(error) {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			console.log("coucou dans interceptor refreshtoken");
			originalRequest._retry = true;
			return axios
				.post(config.server_url + "/admin/refreshtoken", {
					refreshtoken: localStorage.getItem("refreshtoken"),
				})
				.then((res) => {
					if (res.status === 200) {
						console.log("res data interceptor refreshtoken", res.data.data);
						// 1) put token to LocalStorage
						localStorage.setItem("token", res.data.data.token);
						localStorage.setItem("refreshtoken", res.data.data.refreshtoken);
						localStorage.setItem("user", JSON.stringify(res.data.data.user));
						// 2) return originalRequest object with Axios.
						originalRequest.headers["x-auth-accesstoken"] = localStorage.getItem("token");
						return axios(originalRequest);
					}
				});
		}
	}
);

Object.defineProperty(Vue.prototype, "$config", { value: config });

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
