import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';
import { User } from '../../../models&Languages/users/userType';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService<User> {

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
