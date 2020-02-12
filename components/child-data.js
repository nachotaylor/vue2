Vue.component('child-data', {
    data() {
        return {
            name: 'Child name'
        }
    },
    template: `
        <div>
            <h2>Acceso a datos hijo</h2>
        </div>
    `
});