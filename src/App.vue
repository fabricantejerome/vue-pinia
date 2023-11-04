<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const cartStore = useCartStore();
// const { products } = storeToRefs(useProductStore());

productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard v-for="product in  productStore.products " :key="product.name" :product="product"
        @addToCart="cartStore.addItems($event, product)" />
      <!-- <ProductCard v-for="product in products" :key="product.name" :product="product" /> -->
    </ul>
  </div>
</template>
