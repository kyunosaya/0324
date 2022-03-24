const App = {
    data(){
        return {
            name:'Flower Title',
            title:'flower01',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            imgSrc:'./images/source01.JPG',
            price:'500'
        }
    }
}

Vue.createApp(App).mount('#app');