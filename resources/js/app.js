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

require('alpinejs');
