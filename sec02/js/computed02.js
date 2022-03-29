const App = {
  data(){
    return{
      myArray:[22,45,53,99,70]
    }
  },
  computed:{
    arrayNam(){
      return this.myArray.filter(item => (item < 50) )
    }
  }
}
Vue.createApp(App).mount('#app')







//forEach(function(){}) -> 실행
//filter(function(){}) -> 배열(참인 조건만)
//map(function(){}) -> 배열(전체)

//push, unshift
