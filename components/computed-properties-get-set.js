Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amuountFormatted: {
            get() {
                return `${this.amount}$`;
            },
            set(newValue) {
                $this.amount = newValue;
            }
        }
    },
    template: `
        <div>
            <h2>Computed properties</h2>
            <input v-model="amount">
            <p>{{ amuountFormatted | currency_filter('U$') }}</p>
        </div>
    `
});