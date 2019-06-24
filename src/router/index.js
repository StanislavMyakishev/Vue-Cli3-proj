import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Item from '@/components/Items/Item'
import ItemsList from '@/components/Items/List'
import NewItem from '@/components/Items/NewItem'
import Orders from '@/components/User/Orders'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import OrganizationInfo from "../components/User/OrganizationInfo";
import CategoryOrders from "../components/Items/CategoryOrders";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/ord/:id',
            props: true,
            name: 'order',
            component: Item
        },
        {
            path: '/list',
            name: 'list',
            component: ItemsList
        },
        {
            path: '/new',
            name: 'newItem',
            component: NewItem
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/reg',
            name: 'reg',
            component: Registration
        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders
        },
        {
            path: '/organization',
            // props: true,
            name: 'organization',
            component: OrganizationInfo
        },
        {
            path: '/category',
            props: true,
            name: 'category',
            component: CategoryOrders
        },
    ],
    mode: 'history'
})