<template>
    <div v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields">
            <template v-slot:cell(actions)="actions">
                <b-button size="sm" variant="danger" @click.stop="removeProductFromCart(actions.item)">
                    Eliminar
                </b-button>
            </template>
        </b-table>
        <b-alert show variant="success" class="text-center">
            Costo total: ${{ totalCost }}
        </b-alert>
    </div>
    <b-alert v-else show variant="info">No hay productos</b-alert>
</template>

<script>
    import {mapGetters, mapMutations, mapState} from 'vuex'

    export default {
        data() {
            return {
                fields: ['name', 'qty', 'price', 'actions']
            }
        },
        computed: {
            ...mapState('cart', ['cart']),
            ...mapGetters('cart', ['totalCost'])
        },
        methods: {
            ...mapMutations('cart', ['removeProductFromCart'])
        }
    }
</script>