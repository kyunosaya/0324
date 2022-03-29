const App = Vue.createApp({})

App.component(
  'my-app',{
    props:['str','num'],
    template:'<p>{{str}}-{{num}}</p>'
  }
)

App.mount('#app')