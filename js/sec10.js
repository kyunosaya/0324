const App = {
  data(){
    return{
      name:'saya',
    }
  },
  methods:{
    // action:function(){} 의 약자 => action(){}
    action(event){
      alert('Hello ' + this.name + '!');
    }
  }
}
Vue.createApp(App).mount('#app');