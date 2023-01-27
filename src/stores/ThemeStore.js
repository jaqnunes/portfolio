import { defineStore } from 'pinia';

const useThemeStore = defineStore('Theme', {
  state: () => ({
    isDarkTheme: true,
  }),
  getters: {
    isDarkThemeActive() {
      return this.isDarkTheme;
    },
    getTheme() {
      return this.isDarkTheme ? 'dark' : 'light';
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