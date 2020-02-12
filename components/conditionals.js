Vue.component('conditionals', {
    data() {
        return {
            age: 65
        }
    },
    template: `
    <div>
        <h2>Condicionales</h2>
        <input v-model="age">
        <p v-if="age < 18"> Menor de edad</p>
        <p v-else-if="age >= 18 && age < 65"> Mayor de edad</p>
        <p v-else="age >= 65"> Jubilado</p>
    </div>    
    `
});