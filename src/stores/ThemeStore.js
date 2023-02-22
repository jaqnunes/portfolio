import { defineStore } from 'pinia';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const useThemeStore = defineStore('Theme', {
  state: () => ({
    isDarkTheme: false,
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
       this.isDarkThemeActive ? SunIcon : MoonIcon
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