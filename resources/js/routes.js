import VueRouter from "vue-router";
import Bookables from "./Bookables/bookables";
import Bookable from "./Bookable/bookable";
import Review from "./Review/review";
const routes = [
    {
        path :"/",
        component: Bookables,
        name: 'home'
    },
    {
        path :"/bookable/:id",
        component: Bookable,
        name: 'bookable'
    },
    {
        path :"/review/:id",
        component: Review,
        name: 'review'
    },

];

const router = new VueRouter({
    routes,
    mode : "history"
});

export default router;
