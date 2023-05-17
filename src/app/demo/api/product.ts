interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    code?: string;
    name?: string;
   author?:string;
    area?:string;
    quote?:string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    category?: string;
    editorial?:string;
    city?:string;
    date?:string;
    image?: string;
    rating?: number;
    edition?:string;
    volume?:string;
    postdate?:string;
    digitaldate?:string;
    digitizer?:string;
    digital?:boolean;
    checked?:boolean;
    datde?:number;
    //pruebas
    document?:string;
    acciones?:number;

}

export interface Modal {
  id?: string;
  code?: string;
  name?: string;
 author?:string;
  area?:string;
  quote?:string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: InventoryStatus;
  category?: string;
  editorial?:string;
  city?:string;
  date?:string;
  image?: string;
  rating?: number;
  edition?:string;
  volume?:string;
  postdate?:string;
  digitaldate?:string;
  digitizer?:string;
  digital?:boolean;
  checked?:boolean;
  datde?:number;
  //pruebas
  document?:string;
}
