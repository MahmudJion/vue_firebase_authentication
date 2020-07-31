import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'

Vue.config.productionTip = false

const configOptions = {
    apiKey: "",
    authDomain: "vue-firebase-authenticat-25697.firebaseapp.com",
    databaseURL: "https://vue-firebase-authenticat-25697.firebaseio.com",
    projectId: "vue-firebase-authenticat-25697",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

firebase.initializeApp(configOptions);

new Vue({
  render: h => h(App),
}).$mount('#app')
