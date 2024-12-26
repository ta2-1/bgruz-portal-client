import { defineStore } from 'pinia';
import { ref } from 'vue';
import { bidService } from '@/service/bid';
import type { CreateBidDto } from '@/models/manual-data-contracts';

const defaultValue = (): CreateBidDto => ({
  clientId: null,
  directionId: null,
  vehicleTypeId: null,
  date: new Date().toISOString().split('T')[0], // Default to today's date
});

export const useBidStore = defineStore('bid', () => {
  const isOpenCreate = ref(false);
  const isLoading = ref(false);
  const items = ref([]);
  const itemForm = ref<CreateBidDto>(defaultValue());
  const activeItem = ref(null);

  const toggleCreate = () => {
    if (!isOpenCreate.value) {
      itemForm.value = defaultValue();
    }
    isOpenCreate.value = !isOpenCreate.value;
  };

  const createItem = async () => {
    try {
      isLoading.value = true;
      const data = await bidService.create(itemForm.value);
      items.value.push(data);
      toggleCreate();
    } catch (error) {
      console.error('Failed to create bid', error);
      // Optionally handle error (show notification, etc.)
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isOpenCreate,
    toggleCreate,
    createItem,
    itemForm,
    items,
    activeItem,
    isLoading,
  };
});