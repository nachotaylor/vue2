Vue.component('computed-properties', {
    data() {
        return {
            name: 'Nacho',
            surname: 'Taylor'
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.surname}`;
        }
    },
    template: `
        <div>
            <h2>Computed properties</h2>
            <p>{{ fullName }}</p>
        </div>
    `
});