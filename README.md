# vue_firebase_authentication

> ✅ Production Ready Vue + Firebase authentication scaffold

This repository contains a Vue.js project with a Vuex store module for handling user authentication state using Firebase.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Firebase environment variables
Copy `.env.example` to `.env.local` and add your Firebase values:

```
VUE_APP_FIREBASE_API_KEY=your-api-key
VUE_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
VUE_APP_FIREBASE_PROJECT_ID=your-project-id
VUE_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VUE_APP_FIREBASE_APP_ID=your-app-id
VUE_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## Vuex Store for User Authentication
### Features

User Authentication State: Manage user login state and user data.
Vuex Modules: Organized structure for scalability and maintainability.

### Store Code
The Vuex store module for user authentication is defined as follows:

```
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userModule = {
  state: {
    loggedIn: false,
    data: null
  },
  getters: {
    user(state) {
      return state;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value;
    },
    SET_USER(state, data) {
      state.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
};

export default new Vuex.Store({
  modules: {
    user: userModule
  }
});
```

## Integrate with Vue Instance
To integrate the Vuex store with your Vue instance, follow these steps:

### Create the Store: 
Create a store.js file in your project's source directory and add the above code.

### Use the Store in Your Vue Instance: 
In your main Vue instance file (e.g., main.js), import and use the store:

```
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
```

## Usage
Accessing User State
To access the user state in your components, use the mapGetters helper from Vuex:

```
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "user/user"
    })
  }
};
```
## Fetching User Data
To fetch and update the user data, dispatch the fetchUser action:

```
this.$store.dispatch("user/fetchUser", user);
```
