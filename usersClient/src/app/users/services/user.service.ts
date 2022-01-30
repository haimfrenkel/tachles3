import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';
import { UserList } from 'src/models&Languages/users/userList.interface';
import { User } from '../../../models&Languages/users/userType';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService<User> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllUsers(): Observable<any> {
    return this.getAll("users").pipe(map(data => this.convertToUserList(data)))
  }

  getOne(id: number) {
    return this.getOneByID("users", "", id)
  }

  convertToUserList(data: User[]) {
    let userList: UserList[] = []
    for (let i = 0; i < data.length; i++) {
      let user: UserList = {
        "id": data[i].id,
        "firstName": data[i].men.name.firstName,
        "lastName": data[i].men.name.lastName,
        "fatherName": data[i].men.fatherName,
        "phoneNumber": data[i].men.phones[0]?.number ? data[i].men.phones[0].number : 0,
        "city": data[i].address.city,
      }
      userList.push(user)
    }
    return userList
  }
}

