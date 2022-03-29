const App = Vue.createApp({
  data(){
    return{
      myArray:[22,25,35,99,70]
    }
  },
  methods:{
    arrayNam(){
      // return this.myArray.filter(function(item){item < 50})
    // return this.myArray.filter(item => item < 50)
    return this.myArray.filter(item => (item < 50) )
    }
  }
})
App.mount('#app')







//forEach(function(){}) -> 실행
//filter(function(){}) -> 배열(참인 조건만)
//map(function(){}) -> 배열(전체)

//push, unshift
