import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from 'src/models&Languages/users/child.interface';
import { User } from 'src/models&Languages/users/userType';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService extends UserService {
  user: User
  child: Child[];
  cityURL: string = `https://data.gov.il/api/3/action/datastore_search?resource_id=351d4347-8ee0-4906-8e5b-9533aef13595`;
  streetURL: string = `https://data.gov.il/api/3/action/datastore_search?resource_id=a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3&q=`;
  endURL: string = "&limit=60000";
  editMode: boolean = false;

  constructor(protected override http: HttpClient) {
    super(http);
    this.initUser()    
  }

  initUser() {
    this.user = {
      userName: "",
      password: "1234",
      men: {
        taz: 0,
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
        taz: 0,
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
    return this.http.get(`${this.cityURL}${this.endURL}`)
  }

  getStreet(city: string): Observable<any> {
    return this.http.get(`${this.streetURL}${city}${this.endURL}`)
  }

  onValueChange(key: string, value: any, idx?: any) {    
    switch (key) {
      case "men":
        this.user.men = { ...this.user.men, ...value }
        break;
      case "menPhones":
        this.user.men.phones = value.phones
        break;
      case "menJobs":        
        this.user.men.jobs = value.jobs
        break;
      case "menName":
        this.user.men.name = { ...value };
        break;
      case "women":
        this.user.women = { ...this.user.women, ...value }
        break;
      case "womenPhones":
        this.user.women.phones = value.phones
        break;
      case "womenJobs":
        this.user.women.jobs = value.jobs
        break;
      case "womenName":
        this.user.women.name = { ...value };
        break;
      case "main":
        this.user = { ...this.user, ...value }
        break;
      case "bankAccount":
        this.user.bankAccount = { ...value };
        break;
      case "address":
        this.user.address = { ...value };
        break;
      case "children":
        this.user.children =   value.children;
        break;
    }
  }

  save(): Observable<any> {
    if (this.editMode && this.user.id) {
      this.editMode = false
      return this.updateOne("users", "", this.user.id, this.user)
    }
    return this.create("users", "", this.user);
  }
}
