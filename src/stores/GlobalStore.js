import { defineStore } from 'pinia';

const useGlobalStore = defineStore('Global', {
  actions: {
    scroll(refName) {
      if (!refName) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  }
});

export default useGlobalStore;