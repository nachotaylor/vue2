Vue.component('vmodel-checkboxes', {
    data() {
        return {
            frameworks: []
        }
    },
    template: `
        <div>
            <h2>Checkboxes</h2>
            <input type="checkbox" id="vuejs" value="Vuejs" v-model="frameworks">
            <label for="vuejs"> Vuejs</label>
            <input type="checkbox" id="angular" value="Angular" v-model="frameworks">
            <label for="angular"> Angular</label>
            <input type="checkbox" id="react" value="React" v-model="frameworks">
            <label for="react"> React</label>
            <p>{{ frameworks }}</p>
        </div>
    `
})