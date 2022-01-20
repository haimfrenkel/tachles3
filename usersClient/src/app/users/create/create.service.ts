import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';
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
        DOB: ""
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
        DOB: ""
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
        this.user.men = {...this.user.men, ...value}
        break;
      case "menPhones":
        this.user.men.phones = {...value} 
        break;
      case "menJobs":
        this.user.men.jobs.push(value)
        break;
      case "menName":
        this.user.men.name = value;
        break;
      case "women":
        this.user.women = {...this.user.women, ...value}
        break;
      case "womenPhones":
        this.user.women.phones.push(value) 
        break;
      case "womenJobs":
        this.user.women.jobs.push(value)
        break;
      case "womenName":
        this.user.women.name = value;
        break;
      case "main":
        this.user.dateOfMarriage = value.dateOfMarriage;
        this.user.shtibel = value.shtibel
        this.user.userName = value.userName
        break;
      case "bankAccount":
        this.user.bankAccount = value;
        break;
        case "address":
        this.user.address = value;
        break;
      case "children":
        this.user.children.push(value);
        break;
    }
  }
  save(){
  }
}
