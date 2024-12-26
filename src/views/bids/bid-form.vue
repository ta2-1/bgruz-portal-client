<template>
    <a-form layout="vertical">
      <a-form-item label="Клиент">
        <a-select 
          v-model:value="store.itemForm.clientId"
          @change="onClientSelect"
          :loading="clientStore.isLoadingClients"
        >
          <a-select-option 
            v-for="client in clientStore.clients" 
            :key="client.id" 
            :value="client.id"
          >
            {{ client.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
  
      <a-form-item label="Направление">
        <a-select 
          v-model:value="store.itemForm.directionId"
          :disabled="!clientStore.selectedClient"
          :loading="clientStore.isLoadingDirections"
        >
          <a-select-option 
            v-for="direction in clientStore.clientDirections" 
            :key="direction.id" 
            :value="direction.id"
          >
            {{ direction.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
  
      <a-form-item label="Тип ТС">
        <a-select 
          v-model:value="store.itemForm.vehicleTypeId"
          :disabled="!clientStore.selectedClient"
          :loading="clientStore.isLoadingVehicleTypes"
        >
          <a-select-option 
            v-for="vehicleType in clientStore.clientVehicleTypes" 
            :key="vehicleType.id" 
            :value="vehicleType.id"
          >
            {{ vehicleType.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
  
      <a-form-item label="Дата">
        <a-date-picker 
          v-model:value="bidDate" 
          valueFormat="YYYY-MM-DD"
        />
      </a-form-item>
    </a-form>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useBidStore } from './use-bid.store';
  import { useClientStore } from '@/stores/client-store';
  
  const store = useBidStore();
  const clientStore = useClientStore();
  
  // Convert string date to moment for date picker
  const bidDate = ref(store.itemForm.date);
  
  // Watch for date changes and update store
  watch(bidDate, (newDate) => {
    store.itemForm.date = newDate;
  });
  
  const onClientSelect = (clientId: number) => {
    const selectedClient = clientStore.clients.find(c => c.id === clientId);
    if (selectedClient) {
      clientStore.selectClient(selectedClient);
    }
  };
  
  // Fetch clients on component mount
  onMounted(() => {
    clientStore.fetchClients();
  });
  </script>