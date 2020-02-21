<template>
    <div id="app">
        <shop-layaout class="mt-5">
            <template slot="product-list">
                <product-list></product-list>
            </template>
            <template slot="cart">
                Carrito
            </template>
        </shop-layaout>
    </div>
</template>

<script>
    import ProductList from "@/components/ProductList";
    import ShopLayaout from "@/components/ShopLayaout";

    export default {
        name: 'app',
        components: {
            ProductList,
            ShopLayaout
        }
    }
</script>