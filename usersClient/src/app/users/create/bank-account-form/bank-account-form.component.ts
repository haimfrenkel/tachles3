import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css']
})
export class BankAccountFormComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      'bankNo': new FormControl('', Validators.required),
      'bankName': new FormControl('', Validators.required),
      'branchNo': new FormControl('', Validators.required),
      'accountNo': new FormControl('', Validators.required),
    })
  }

}
