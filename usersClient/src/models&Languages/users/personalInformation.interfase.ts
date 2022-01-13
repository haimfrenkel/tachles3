import { Phone } from './phone.interface'
import { Name } from './name.interface'
import { Job } from './job.interface'

export interface PersonalInformation {
    ID: number;
    name: Name;
    fatherName: string;
    grandfatherName: string;
    greatGrandfatherName?: string;
    DOB?: Date;
    email: string;
    phones: Phone[];
    jobs: Job[];
    maritalStatus:string;
}