import { defineStore } from 'pinia';

export const useSubserviceStore = defineStore('subservice', {
  state: () => ({
    selectedSubservice: null as any,
  }),
  actions: {
    setSubservice(data: any) {
      this.selectedSubservice = data;
    },
    clearSubservice() {
      this.selectedSubservice = null;
    },
  },
});
