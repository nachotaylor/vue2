Vue.component('login-form', {
    data() {
        return {
            logged: false,
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.logged = this.user.email === 'test@m.com' && this.user.password === '1234'
        }
    },
    template: `
    <div>
        <h2>Login form</h2>
        <p v-show="logged">
            User: {{ user.email }} logeado!
        </p>
        <form @submit.prevent="login">
            <input type="email" autocomplete="off" v-model="user.email" name="email">        
            <input type="password" v-model="user.password" name="password">        
            <input type="submit" value="Iniciar session">        
        </form>
    </div>        
    `
});