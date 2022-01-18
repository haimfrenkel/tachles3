import { Injectable } from '@angular/core';
import { User } from 'src/models&Languages/users/userType';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  user: User
  constructor() {
    this.user = {
      userName: "",
      men: {
        ID: 0,
        name: {
          startName: "",
          firstName: "",
          lastName: "",
          endName: ""
        },
        fatherName: "",
        grandfatherName: "",
        greatGrandfatherName: "",
        email: "",
        maritalStatus: "",
        phones: [],
        jobs: [],
        dob: ""
      },
      women: {
        ID: 0,
        name: {
          startName: "",
          firstName: "",
          lastName: "",
          endName: ""
        },
        fatherName: "",
        grandfatherName: "",
        greatGrandfatherName: "",
        email: "",
        maritalStatus: "",
        phones: [],
        jobs: [],
        dob: ""
      },
      address: {
        state: "",
        city:"",
        street:"",
        buildingNumber: 0,
        apartment: 0,
        zipCode: 0,
      },
      bankAccount: {
        bankNo: 0,
        bankName: "",
        branchNo: 0,
        accountNo: 0
      },
      children: [],
      dateOfMarriage: "",
      shtibel: ""
    }
  }
}
