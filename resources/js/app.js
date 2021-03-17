 require('alpinejs');
require('./bootstrap');
import 'bootstrap';
import StoreDefenition from "./store";

//window.Vue = require("vue");
//what it is used for !!!! it worked properly without it they say if vue insance not defined globally
import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from "./routes";
import index from "./index";
import moment from "moment";
import StarRating from "./shared/components/StarRating";
import fatalError from "./shared/components/fatalError";
import Success from "./shared/components/Success";

Vue.filter("fromNow",value => moment(value).fromNow());

Vue.component('star-rating',StarRating);
Vue.component('fatal-error',fatalError);
Vue.component('success-view',Success);

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreDefenition);

const app = new Vue({
    el : "#app",
    router,
    store,
    components: {
        "index" : index
    },
    async beforeCreate() {
        this.$store.dispatch("loadStoredState");
        await axios.get('/sanctum/csrf-cookie');
        await axios.post("/login",{
            email : "zzzz",
            password : "zzzzzzzz"
        });
    },
});
