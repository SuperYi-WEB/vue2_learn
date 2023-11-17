import Vue from 'vue'
import App from './App.vue'

// 阻止启动生产消息
Vue.config.productionTip = false
/*
	关于不同版本的Vue：
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
      需要使用render函数接收到的createElement函数去指定具体内容。
*/

new Vue({ 
  // render函数是vue通过js渲染dom结构的函数createElement，约定可以简写为h
  render: h => h(App),
  /* 全写：
    render:function(createElement){
      return createElement(App);
    }
    例子：vue 传递帮你调render函数并传递了一个名为createElement的函数,第一个参数h1元素，第二个参数h1的内容
          render:(createElement) => createElement('h1',"SuperYi")
  */
}).$mount('#app')   // 没有配置el属性就手动挂载$mount("#app")

/*
  实际效果就是
    new Vue({
      el:'#app',
      template:'<App></App>',
      components:{
        App
      }
    })
*/