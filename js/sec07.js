const App = {
  data(){
    return{
      product : [
        {
          name:'flower01',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          imgSrc:'./images/source01.JPG'
        },
        {
          name:'flower02',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          imgSrc:'./images/source02.JPG'
        },
        {
          name:'flower03',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          imgSrc:'./images/source03.JPG'
        },
        {
          name:'flower04',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          imgSrc:'./images/source04.JPG'
        }
      ]
    }
  }
}
Vue.createApp(App).mount('#app');