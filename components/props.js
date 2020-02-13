Vue.component('props', {
    props: {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    template: `
        <div>
            <h2>Props con Vue</h2>
            <p>{{ name }} {{ surname}}</p>
        </div>
    `
});