let id = 1;

Vue.createApp({
  data(){
    return{
      newTodo:'',
      todos:[
        {id:id++, text:'html배우기'},
        {id:id++, text:'css배우기'},
        {id:id++, text:'javascript배우기'},
        {id:id++, text:'jquery배우기'}
      ]
    }
  },
  methods:{
    addTodo(){ /* this : 위에꺼에서 찾아~ */
      this.todos.push({
        id:id++,
        text:this.newTodo
      })
      this.newTodo = ''
    },
    removeTodo(todo){
      this.todos = this.todos.filter((item) => (item !== todo))
    }
  }
}).mount('#app')



// Vue.createApp({
//   data(){
//     return{
//       newTodo:'',
//       todos:[
//         {
//           id:i++,
//           text:'html배우기'
//         },
//         {
//           id:i++,
//           text:'css배우기' 
//         },
//         {
//           id:i++,
//           text:'방청소하기'
//         },
//         {
//           id:i++,
//           text:'게임하기'
//         }
//       ]
//     }
//   }
// }).mount('#app')
