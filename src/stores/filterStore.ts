import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", {
  state: () => ({
    location: null as string | null,
    serviceId: null as number | null,
    pincodeId: null as number | null,
    searchTriggered: false,
  }),
  actions: {
    setFilters({ location, serviceId, pincodeId }: { location: string | null, serviceId: number | null, pincodeId: number | null }) {
      this.location = location;
      this.serviceId = serviceId;
      this.pincodeId = pincodeId;
      this.searchTriggered = true;
    },
    resetSearchTrigger() {
      this.searchTriggered = false;
    }
  }
});