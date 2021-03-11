import VueRouter from "vue-router";
import Bookables from "./Bookables/bookables";
import Bookable from "./Bookable/bookable";
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
    }
];

const router = new VueRouter({
    routes,
    mode : "history"
});

export default router;
