import { Address } from './address.interface'



export interface Job {
    address: Address;
    companyName: string;
    job?: string
    id?:number;

}
