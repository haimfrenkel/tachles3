import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/models&Languages/general/login.interface';
import { BaseHttpService } from '../shared/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseHttpService<Login> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  authentication(body: Login): Observable<any>{
    return this.create("login", "", body);
  }

  saveInLocalStorage(token: any){
    localStorage.setItem("token", token);
  }
}
