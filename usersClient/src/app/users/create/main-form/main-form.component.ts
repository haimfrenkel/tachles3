import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  subscription: Subscription
  form: FormGroup;
  confirmPass: string
  keyForMen: string = 'men';
  keyForWomen: string = 'women';
  keyForAddress: string = 'address';
  displayMenForm: boolean = false;
  displayWomenForm: boolean = false;
  displayChildForm: boolean = false
  displayBankAccountForm: boolean = false;
  displayAddressForm: boolean = false;


  constructor(private saveSRV: CreateService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
    this.subscription = this.form.valueChanges.subscribe(data=>{
      this.saveSRV.onValueChange("main", data)      
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  initForm() {
    this.form = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl(null, Validators.required),  
    })
  }

  save(){
    this.saveSRV.save().subscribe(data=>{
      this.router.navigate(['/users'])
    })
  }

 

  openMenForm() {
    if (this.displayMenForm) {
      this.displayMenForm = false;
    } else {
      this.displayAddressForm = false;
      this.displayBankAccountForm = false;
      this.displayChildForm = false;
      this.displayWomenForm = false;
      this.displayMenForm = true
    }
  }

  openWomenForm() {
    if (this.displayWomenForm) {
      this.displayWomenForm = false;
    } else {
      this.displayAddressForm = false;
      this.displayBankAccountForm = false;
      this.displayChildForm = false;
      this.displayMenForm = false;
      this.displayWomenForm = true
    }
  }

  openAddressForm() {
    if (this.displayAddressForm) {
      this.displayAddressForm = false;
    } else {
      this.displayMenForm = false;
      this.displayBankAccountForm = false;
      this.displayChildForm = false;
      this.displayWomenForm = false;
      this.displayAddressForm = true
    }
  }

  openBankAccountForm() {
    if (this.displayBankAccountForm) {
      this.displayBankAccountForm = false;
    } else {
      this.displayAddressForm = false;
      this.displayMenForm = false;
      this.displayChildForm = false;
      this.displayWomenForm = false;
      this.displayBankAccountForm = true
    }
  }

  openChildForm() {
    if (this.displayChildForm) {
      this.displayChildForm = false;
    } else {
      this.displayAddressForm = false;
      this.displayBankAccountForm = false;
      this.displayMenForm = false;
      this.displayWomenForm = false;
      this.displayChildForm = true
    }
  }
}



