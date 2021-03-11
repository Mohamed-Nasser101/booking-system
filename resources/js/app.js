require('./bootstrap');
import 'bootstrap';

 //window.Vue = require("vue");
// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );
import Vue from 'vue'
import VueRouter from 'vue-router'
import  router from "./routes";
import index from "./index";

Vue.use(VueRouter);

const app = new Vue({
    el : "#app",
    router,
    components: {
        "index" : index
    }
});
