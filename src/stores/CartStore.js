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