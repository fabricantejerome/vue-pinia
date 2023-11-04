import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: []
        }
    },
    getters: {
        count: (state) => state.items.length,
        isEmpty: (state) => state.count == 0,
        grouped: (state) => groupBy(state.items, item => item.name),
        groupCount: (state) => (name) => state.grouped[name].length,
        total: (state) => state.items.reduce((a, item) => a + item.price, 0)
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count)

            for (let i = 0; i < count; i++) {
                this.items.push({ ...item });
            }
        },
        clearItem(name) {
            this.items = this.items.filter((item) => item.name != name)
        }
    }
});