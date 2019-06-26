import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Order from '@/components/Items/Order'
import MyRequests from '@/components/User/MyRequests'
import NewOrder from '@/components/User/NewOrder'
import MyOrders from '@/components/User/MyOrders'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import OrderCategory from '@/components/Filter/OrderCategory'
import Test from '@/components/test'
import VueRouter from 'vue-router'
import Modify from '@/components/Auth/Modify'
import OrganizationInfo from '@/components/User/OrganizationInfo'
import SettingsPage from '@/components/User/SettingsPage'
import EditSettingsPage from '@/components/User/EditSettingsPage'

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
            path: '/order',
            // props: true,
            name: 'order',
            component: Order
        },
        {
            path: '/myrequests',
            name: 'myRequests',
            component: MyRequests
        },
        {
            path: '/new',
            name: 'newOrder',
            component: NewOrder
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
            path: '/myorders',
            name: 'myOrders',
            component: MyOrders
        },
        {
            path: '/organization/:id',
            props: true,
            name: 'organization',
            component: OrganizationInfo
        },
        {
            path: '/category',
            name: 'category',
            component: OrderCategory
        },
        {
            path: '/settingspage',
            name: 'settingsPage',
            component: SettingsPage
        },
        {
            path: '/editinfo',
            name: 'editSettingsPage',
            component: EditSettingsPage
        },
    ],
    mode: 'history'
})