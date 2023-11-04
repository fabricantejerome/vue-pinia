import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: []
        }
    },
    getters: {
        // count() {
        //     return this.items.length
        // },
        count: (state) => state.items.length,
        isEmpty() {
            return this.count == 0
        }
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count)

            for (let i = 0; i < count; i++) {
                this.items.push({ ...item });
            }

        }
    }
});