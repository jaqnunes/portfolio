import { defineStore } from 'pinia';

const useThemeStore = defineStore('Theme', {
  state: () => ({
    isDarkTheme: false,
  }),
  getters: {
    isDarkThemeActive() {
      return this.isDarkTheme;
    },
    getTheme() {
      return this.isDarkTheme ? 'dark' : '';
    },
    getThemeIcon() {
      return (
        "mdi-lightbulb-" + `${this.isDarkThemeActive ? "on" : "off"}`
      );
    },
  },
  actions: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    }
  }
});

export default useThemeStore;