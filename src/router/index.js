import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import AppSignUp from '@/views/AppSignUp.vue'
import ChessBoard from '@/views/ChessBoard.vue'
import AppSettings from '@/views/AppSettings.vue'
import AboutUs from '@/views/AboutUs.vue'
import ContactPage from '@/views/ContactPage.vue'
import MyAccount from '@/views/MyAccount.vue'
import LeaderBoard from '@/views/LeaderBoard.vue'
import ChessBoardView from '../views/ChessBoardView.vue'
import WhiteSideChessboardView from '../views/WhiteSideChessboardView.vue'


/**
 * Router setup for the Vue application.
 * This configuration establishes the path and component mapping.
 */
Vue.use(Router)
/**
 * Array of route objects defining the path, name, and component for each route.
 * @type {Array<Object>}
 */
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage // Main page
  },
  {
    path: '/AppSignUp',
    name: 'AppSignUp',
    component: AppSignUp // Sign up page
  },
  {
    path: '/ChessBoard',
    name: 'ChessBoard',
    component: ChessBoard // Chess board page
  },
  {
    path: '/AppSettings',
    name: 'AppSettings',
    component: AppSettings // Settings page
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs // About us page
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage // Contact us page
  },
  {
    path: '/MyAccount',
    name: 'MyAccount',
    component: MyAccount // My account page
  },
  {
    path: '/LeaderBoard',
    name: 'LeaderBoard',
    component: LeaderBoard // Leader board page
  },
  {
    path: '/chess',
    name: 'chess',
    component: ChessBoardView
  },
  {
    path: '/white',
    name: 'white',
    component: WhiteSideChessboardView
  }
]
/**
 * Router instance configured with history mode and the defined routes.
 * History mode enables a clean URL without hashes.
 * @type {Router}
 */
const router = new Router({
  mode: 'history',
  routes
})

export default router
