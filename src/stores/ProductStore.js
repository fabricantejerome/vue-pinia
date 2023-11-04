import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
    // state
    state: () => {
        return {
            products: []
        };
    },

    // actions
    actions: {
        async fill() {
            this.products = (await import("@/data/products.json")).default;
            // this.products = (await axios.get('some/end/point'))).data;
        }
    }

    // getters
});