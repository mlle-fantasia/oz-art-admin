import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {},
		connected: false,
	},
	mutations: {
		set_user(state, user) {
			state.user = user;
		},
		set_connected(state, isConnected) {
			state.connected = isConnected;
		},
		set_connexion(state, data) {
			console.log("data.connect", data.connect);
			if (data.connect) {
				if (data.token) localStorage.setItem("token", data.token);
				if (data.refreshtoken) localStorage.setItem("refreshtoken", data.refreshtoken);
				localStorage.setItem("user", JSON.stringify(data.user));
				state.user = data.user;
				state.connected = true;
			} else {
				localStorage.setItem("token", "");
				localStorage.setItem("refreshtoken", "");
				localStorage.setItem("user", JSON.stringify({}));
				state.user = {};
				state.connected = false;
			}
		},
	},
	actions: {},
	getters: {},
});
