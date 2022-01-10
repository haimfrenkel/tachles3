import { Phone } from '../users/phone.interface'
import { Name } from '../users/name.interface'
import { Job } from '../users/job.interface'

export interface PersonalInformation {
    name: Name;
    fatherName: string;
    grandfatherName: string;
    greatGrandfatherName: string;
    DOB: Date;
    email: string;
    phones: Phone[];
    jobs: Job[];
}