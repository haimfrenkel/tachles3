import { PersonalInformation } from "./personalInformation.interfase";
import { Address } from "./address.interface";
import { BankAccount } from "./bankAccount.interface";
import { Child } from "./child.interface";


export class User {
    userName: string;
    children: Child[];
    men: PersonalInformation;
    women: PersonalInformation;
    address: Address;
    bankAccount: BankAccount;
    dateOfMarriage: string;
    role?:string;
    shtibel: string;
    id?:number;
}