import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "",
    authDomain: "vue-firebase-authenticat-25697.firebaseapp.com",
    databaseURL: "https://vue-firebase-authenticat-25697.firebaseio.com",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
