const App = Vue.createApp({
  data(){
    return{
      name:'click'
    }
  },
  method:{
    myAction(message){
      console.log(message)
      this.name = message
    }
  }
})

App.mount('#app')