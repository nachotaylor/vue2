Vue.component('emit', {
    data() {
        return {
            carBrand: 'Toyota'
        }
    },
    template: `
        <div>
            <h2>Emitir eventos vue</h2>
            <p @click="$emit('show_car_brand', carBrand)">
                Pulsa aqui, para emitir evento.
            </p>
        </div>
    `
});