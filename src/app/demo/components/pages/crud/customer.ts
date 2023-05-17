export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  tipo?: string;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  tema?:string;
  digital?:boolean;
  representative?: Representative;
  verified?: boolean;
  balance?: number;

}
