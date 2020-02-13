let MyMixin = {
    mounted() {
        console.log("Mixin init")
        console.log(this.mixinData)
        this.test()
    },
    data() {
        return {
            mixinData: 'Mixin Data'
        }
    },
    methods: {
        test() {
            console.log('test from mixin');
        }
    }
};

Vue.component('mixins', {
    mixins: ['myMixin'],
    mounted() {
        console.log('Mounted from component with mixins')
    },
    data() {
        return {
            mixinData: 'Mixin Data from cmp'
        }
    },
    template: `
    <div>
        <h2>Uso de Mixins</h2>
        <p>{{ mixinData }}</p>
    </div>
    `
});