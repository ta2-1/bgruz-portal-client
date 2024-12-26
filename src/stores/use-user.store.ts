import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface User {
  id?: number;
  login?: string;
  name?: string;
  role?: string;
}

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<User | null>(null);

  const setUser = (userData: User) => {
    currentUser.value = userData;
  };

  const clearUser = () => {
    currentUser.value = null;
  };

  const isLoggedIn = computed(() => !!currentUser.value);

  return {
    currentUser,
    setUser,
    clearUser,
    isLoggedIn
  };
});