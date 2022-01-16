import { Name } from '../users/name.interface'

export interface Child {
    name: Name;
    dob: string;
    sex: string;
    maritalStatus: string;
    placeOfStudy: string;
    id?:number;

}