require('./bootstrap');
import 'bootstrap';

//window.Vue = require("vue"); 
//what it is used for !!!! it worked properly without it they say if vue insance not defined globally
import Vue from 'vue'
import VueRouter from 'vue-router'
import  router from "./routes";
import index from "./index";
import moment from "moment";
import StarRating from "./shared/components/StarRating";

Vue.filter("fromNow",value => moment(value).fromNow());
Vue.component('star-rating',StarRating);
Vue.use(VueRouter);

const app = new Vue({
    el : "#app",
    router,
    components: {
        "index" : index
    }
});
