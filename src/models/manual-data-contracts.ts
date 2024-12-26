export interface CreateBidDto {
    clientId: number | null;
    directionId: number | null;
    vehicleTypeId: number | null;
    date: string;
    // Add other fields as needed
  }
  
  export interface Bid {
    clientId: number | null;
    directionId: number | null;
    vehicleTypeId: number | null;
    date: string;
  }

  export interface Client {
    id: number;
    name: string;
    // Add other relevant client fields
  }
  
  export interface ClientDirection {
    id: number;
    name: string;
  }
  
  export interface VehicleType {
    id: number;
    name: string;
  }
  
  export interface BidPagination {
    /** A list of transactions */
    items: Bid[];
    /** Pagination metadata */
    // meta: MetadataModel;
  }
  