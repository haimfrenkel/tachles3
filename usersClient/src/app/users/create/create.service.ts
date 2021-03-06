import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models&Languages/users/userType';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService extends UserService {
  user: User
cityURL: string = "https://data.gov.il/api/3/action/datastore_search?resource_id=351d4347-8ee0-4906-8e5b-9533aef13595&"
streetURL: string = "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&q="
endURL: string = "&limit=60000"
  constructor(protected override http: HttpClient) {
    super(http);
    this.initUser()
  }

  initUser() {
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
        DOB: new Date()
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
        DOB: new Date()
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
      dateOfMarriage: new Date(),
      shtibel: ""
    }
  }

  getCity(): Observable<any> {
    return this.http.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=351d4347-8ee0-4906-8e5b-9533aef13595&limit=60000`)

  }
  getStreet(): Observable<any> {
  let url = this.streetURL + "??????????????" + this.endURL
    return this.http.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=60000`)
  }
  
  onValueChange(key: string, value: any) {
    console.log(this.user);
    console.log(key);
    
    switch (key) {
      case "men":
        this.user.men = { ...this.user.men, ...value }
        break;
      case "menPhones":
        this.user.men.phones = { ...value.phones }
        break;
      case "menJobs":
        this.user.men.jobs.push(value)
        break;
      case "menName":
        this.user.men.name = {...value};
        break;
      case "women":
        this.user.women = { ...this.user.women, ...value }
        break;
      case "womenPhones":
        this.user.women.phones.push(value)
        break;
      case "womenJobs":
        this.user.women.jobs.push(value)
        break;
      case "womenName":
        this.user.women.name = {...value};
        break;
      case "main":
        this.user = {...this.user, ...value}
        break;
      case "bankAccount":
        this.user.bankAccount = {...value};
        break;
      case "address":
        this.user.address = {...value};
        break;
      case "children":
        this.user.children.push(value);
        break;
    }
  }
  save(): Observable<any> {
  return  this.create("users", "", this.user);
  }
}
