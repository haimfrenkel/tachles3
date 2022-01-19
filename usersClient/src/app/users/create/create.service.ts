import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
        city: "",
        street: "",
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
  onSave(key: string, value: any) {
    switch (key) {
      case "men":
        this.user.men.ID = value.ID;
        this.user.men.dob = value.dob;
        this.user.men.email = value.email;
        this.user.men.fatherName = value.fatherName;
        this.user.men.grandfatherName = value.grandfatherName;
        this.user.men.greatGrandfatherName = value.greatGrandfatherName;
        this.user.men.maritalStatus = value.maritalStatus;
        break;
      case "menPhones":
        this.user.men.phones = value;
        break;
      case "menJobs":
        this.user.men.jobs = value;
        break;
      case "menName":
        this.user.men.name = value;
        break;
        case "women":
        this.user.women.ID = value.ID;
        this.user.women.dob = value.dob;
        this.user.women.email = value.email;
        this.user.women.fatherName = value.fatherName;
        this.user.women.grandfatherName = value.grandfatherName;
        this.user.women.greatGrandfatherName = value.greatGrandfatherName;
        this.user.women.maritalStatus = value.maritalStatus;
        break;
      case "womenPhones":
        this.user.women.phones = value;
        break;
      case "womenJobs":
        this.user.women.jobs = value;
        break;
      case "womenName":
        this.user.women.name = value;
        break;
      case "":
        this.user.dateOfMarriage = value.dateOfMarriage;
        this.user.shtibel = value.shtibel
        this.user.userName = value.userName
        break;
      case "bankAccount":
        this.user.bankAccount = value;
        break;
      case "children":
        this.user.children = value;
        break;
    }
  }
}
