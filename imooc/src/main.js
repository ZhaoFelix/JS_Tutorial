// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  Apple from './components/Apple'
import  Banana from './components/Banana'

Vue.config.productionTip = false
Vue.use(router);
 let rou = new router({
   mode:'history',
   routers:[
     {
      path:'/apple',
       component:Apple
     },
     {
       path:'/banana',
       component:Banana
     }
   ]
 });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:'rou',
  components: { App },
  template: '<App/>'
})
