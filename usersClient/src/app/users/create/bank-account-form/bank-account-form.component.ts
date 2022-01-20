import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css']
})
export class BankAccountFormComponent implements OnInit {
  subscription: Subscription
  form: FormGroup;
  
  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
    this.editForm()
    this.subscription = this.form.valueChanges.subscribe(data=>{
      this.saveSRV.onSave("bankAccount", data)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  
  initForm(){
    this.form = new FormGroup({
      'bankNo': new FormControl('', Validators.required),
      'bankName': new FormControl('', Validators.required),
      'branchNo': new FormControl('', Validators.required),
      'accountNo': new FormControl('', Validators.required),
    })
  }
  
  editForm(){
    this.form.get('bankNo')?.setValue(this.saveSRV.user.bankAccount.bankNo ? this.saveSRV.user.bankAccount.bankNo : 0);
    this.form.get('bankName')?.setValue(this.saveSRV.user.bankAccount.bankName ? this.saveSRV.user.bankAccount.bankName : 0);
    this.form.get('branchNo')?.setValue(this.saveSRV.user.bankAccount.branchNo ? this.saveSRV.user.bankAccount.branchNo : 0);
    this.form.get('accountNo')?.setValue(this.saveSRV.user.bankAccount.accountNo ? this.saveSRV.user.bankAccount.accountNo : 0);
  }
}
