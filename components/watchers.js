Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUser: null
        }
    },
    methods: {
        async randomUser() {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                this.user = ` ${user.name.title} ${user.name.first} ${user.name.last}`;
            } catch (e) {
                //error
            }
        }
    },
    watch: {
        user(newVal, oldVal) {
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
        <div>
            <h2>Watchers con vue</h2>
            <button @click="randomUser">Obtner nuevo user</button>
            <p>New user: {{user}}</p>
            <p>Old user: {{oldUser}}</p>
        </div>
    `
});