import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  public getToken(): string | null {
    return localStorage.getItem('token')
  }
  
  public setToken(token: string){
    localStorage.setItem('token', token)
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    const jwtHelper: JwtHelperService = new JwtHelperService()
    return token != null && !jwtHelper.isTokenExpired(token);
  }
}
