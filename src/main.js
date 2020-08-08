import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const configOptions = {
    apiKey: "",
    authDomain: "vue-firebase-authenticat-25697.firebaseapp.com",
    databaseURL: "https://vue-firebase-authenticat-25697.firebaseio.com",
    projectId: "vue-firebase-authenticat-25697",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
