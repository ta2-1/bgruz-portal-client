import { BaseApiService } from './api';
import type { Client, ClientDirection, VehicleType } from '@/models/manual-data-contracts';

class ClientService extends BaseApiService {
  // Get all clients for dropdown
  getClients() {
    return this.request<Client[]>({ 
      url: 'clients', 
      method: 'get' 
    });
  }

  // Get directions for a specific client
  getClientDirections(clientId: number) {
    return this.request<ClientDirection[]>({ 
      url: `clients/${clientId}/directions`, 
      method: 'get' 
    });
  }

  // Get vehicle types for a specific client
  getClientVehicleTypes(clientId: number) {
    return this.request<VehicleType[]>({ 
      url: `clients/${clientId}/vehicle-types`, 
      method: 'get' 
    });
  }
}

export default new ClientService(`${import.meta.env.VITE_API_URL}/api`);