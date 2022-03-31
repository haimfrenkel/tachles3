import { Name } from './name.interface'

export interface Child {
    name: Name;
    dob: Date;
    gender: string;
    maritalStatus: string;
    placeOfStudy: string;
    id?:number;

}