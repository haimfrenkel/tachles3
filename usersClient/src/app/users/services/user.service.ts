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

  users: Observable<User[]>

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllUsers(): Observable<User[]> {
    if (!this.users) {
      this.users = this.getAll("users");
    }
    return this.users
  }

  getOne(id: number) {
    return this.getOneByID("users", "", id)
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.create("users", "/uploadFile", formData)
  }

  deleteUser(id: number): Observable<any> {
    return this.deleteOne("users", "", id)
  }
}

