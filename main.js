import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
//这里主要是一个全局的js，我们写的通用的js方法可以封装，然后在这里引入，然后就可以在每个页面里用了。
const app = new Vue({
    ...App
})
app.$mount()
