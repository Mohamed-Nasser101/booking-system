import VueRouter from "vue-router";
import Bookables from "./Bookables/bookables";
import BookableListItem from "./Bookables/bookableListItem";
const routes = [
    {
        path :"/",
        component: Bookables,
        name: 'home'
    },
    {
        path :"/second",
        component: BookableListItem,
        name: 'second'
    }
];

const router = new VueRouter({
    routes,
    mode : "history"
});

export default router;
