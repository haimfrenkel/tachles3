import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../shared/services/base-http.service';
import { Login } from 'src/models&Languages/general/login.interface';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  login() {
    this.loginService.authentication(this.loginForm.value).subscribe(token => {
      if (token.token) {
        this.loginService.saveInLocalStorage(token.token)
        this.router.navigate(["/home"])
      }
    })
  }
}
