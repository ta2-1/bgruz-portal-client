import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import ClientService, { 
  Client, 
  ClientDirection, 
  VehicleType 
} from '@/services/client';

export const useClientStore = defineStore('client', () => {
  // List of all clients
  const clients = ref<Client[]>([]);
  
  // Currently selected client
  const selectedClient = ref<Client | null>(null);
  
  // Directions for the selected client
  const clientDirections = ref<ClientDirection[]>([]);
  
  // Vehicle types for the selected client
  const clientVehicleTypes = ref<VehicleType[]>([]);
  
  // Loading states
  const isLoadingClients = ref(false);
  const isLoadingDirections = ref(false);
  const isLoadingVehicleTypes = ref(false);

  // Fetch all clients
  const fetchClients = async () => {
    try {
      isLoadingClients.value = true;
      clients.value = await ClientService.getClients();
    } catch (error) {
      console.error('Failed to fetch clients', error);
      clients.value = [];
    } finally {
      isLoadingClients.value = false;
    }
  };

  // Select a client and fetch its directions and vehicle types
  const selectClient = async (client: Client) => {
    try {
      // Set selected client
      selectedClient.value = client;

      // Reset previous data
      clientDirections.value = [];
      clientVehicleTypes.value = [];

      // Fetch directions and vehicle types in parallel
      const [directions, vehicleTypes] = await Promise.all([
        ClientService.getClientDirections(client.id),
        ClientService.getClientVehicleTypes(client.id)
      ]);

      clientDirections.value = directions;
      clientVehicleTypes.value = vehicleTypes;
    } catch (error) {
      console.error('Failed to fetch client details', error);
    }
  };

  // Clear selected client
  const clearSelectedClient = () => {
    selectedClient.value = null;
    clientDirections.value = [];
    clientVehicleTypes.value = [];
  };

  return {
    // State
    clients,
    selectedClient,
    clientDirections,
    clientVehicleTypes,
    
    // Loading states
    isLoadingClients,
    isLoadingDirections,
    isLoadingVehicleTypes,
    
    // Actions
    fetchClients,
    selectClient,
    clearSelectedClient
  };
});