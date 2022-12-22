const app = Vue.createApp({
    
    data(){
         return {
            firstName: 'Samson',
            lastName: 'Aricha',
            email: 'aricha@gmail.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
         }
    }
})

app.mount('#app')