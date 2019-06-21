import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Item from '@/components/Items/Item'
import ItemsList from '@/components/Items/ItemsList'
import NewItem from '@/components/Items/NewItem'
import Orders from '@/components/User/Orders'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/item/:id',
            name: 'item',
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
        }
    ],
    mode: 'history'
})