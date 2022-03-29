const App = Vue.createApp({
  data(){
    return{
      name:'click'
    }
  },
  methods:{
    myAction(str){
      console.log(str);
      this.name = str
    }
  }
})
App.mount('#app')