<template>
    <div id="app" class="mt-5">
        <shop-layaout>
            <template slot="product-list">
                <product-list></product-list>
            </template>
            <template slot="cart">
                <cart></cart>
            </template>
        </shop-layaout>
    </div>
</template>

<script>
    import ProductList from "@/components/ProductList";
    import ShopLayaout from "@/components/ShopLayaout";
    import Cart from "@/components/Cart";

    export default {
        name: 'app',
        components: {
            ProductList,
            ShopLayaout,
            Cart
        }
    }
</script>