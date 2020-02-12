Vue.component('loop', {
    data() {
        return {
            frameworks: [
                {id: 1, name: "Laravel"},
                {id: 1, name: "React"},
                {id: 1, name: "Vue"},
                {id: 1, name: "Angular"}
            ]
        }
    },
    template: `
    <div>
        <p>V-for loop</p>
        <ul v-if="frameworks.length">
            <li v-for="framework in frameworks" c-bind:key="framework.id">{{ framework.name }}</li>
        </ul>
    </div>
    `
});