const App = {
    data(){
        return{
            name:'flower',
            imgSrc:'./images/source02.JPG',
            title:'장미'
        }
    }
}

Vue.createApp(App).mount('#app');