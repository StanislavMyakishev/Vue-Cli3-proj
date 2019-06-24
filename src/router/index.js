import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Item from '@/components/Items/Item'
import ItemsList from '@/components/Items/List'
import NewItem from '@/components/Items/NewItem'
import Orders from '@/components/User/Orders'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Field from '@/components/Filter/fields'
import Test from '@/components/test'
import VueRouter from 'vue-router'
import Modify from '@/components/Auth/Modify'
import OrganizationInfo from '@/components/User/OrganizationInfo'

Vue.use(Router);

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/modify',
            name: 'modify',
            component: Modify
        },
        {
            path: '/ord/:id',
            props: true,
            name: 'order',
            component: Item
        },
        {
            path: '/field/:id',
            props: true,
            name: 'field',
            component: Field
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
    ],
    mode: 'history'
})