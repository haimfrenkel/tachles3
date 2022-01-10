import { PersonalInformation } from "./personalInformation.interfase";
import { Address } from "./address.interface";
import { BankAccount } from "./bankAccount.interface";
import { Child } from "./child.interface";


export class User {
    userName: string;
    men: PersonalInformation;
    women: PersonalInformation;
    address: Address;
    bankAccount: BankAccount;
    dateOfMarriage: string
    childern: Child[]
    shtibel: string;
}