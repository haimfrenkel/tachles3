import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  @Input() gender;
  keyForJob: string
  keyForName: string
  form: FormGroup;
  subscription: Subscription

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
    this.editForm()
    this.keyForJob = `${this.gender}Jobs`
    this.keyForName = `${this.gender}Name`
    this.subscription = this.form.valueChanges.subscribe(data => {
      this.saveSRV.onSave(this.gender, data)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  initForm() {
    this.form = new FormGroup({
      'ID': new FormControl(),
      'fatherName': new FormControl(),
      'grandfatherName': new FormControl(),
      'greatGrandfatherName': new FormControl(),
      'DOB': new FormControl(),
      'email': new FormControl(),
      'maritalStatus': new FormControl(),
    })
  }

  editForm() {
    if (this.gender == "men") {
      this.form.get('ID')?.setValue(this.saveSRV.user.men.ID ? this.saveSRV.user.men.ID : "");
      this.form.get('fatherName')?.setValue(this.saveSRV.user.men.fatherName ? this.saveSRV.user.men.fatherName : "")
      this.form.get('grandfatherName')?.setValue(this.saveSRV.user.men.grandfatherName ? this.saveSRV.user.men.grandfatherName : "")
      this.form.get('greatGrandfatherName')?.setValue(this.saveSRV.user.men.greatGrandfatherName ? this.saveSRV.user.men.greatGrandfatherName : "")
      this.form.get('DOB')?.setValue(this.saveSRV.user.men.DOB ? this.saveSRV.user.men.DOB : "")
      this.form.get('email')?.setValue(this.saveSRV.user.men.email ? this.saveSRV.user.men.email : "")
      this.form.get('maritalStatus')?.setValue(this.saveSRV.user.men.maritalStatus ? this.saveSRV.user.men.maritalStatus : "")
    }
    if (this.gender == "women") {
      this.form.get('ID')?.setValue(this.saveSRV.user.women.ID ? this.saveSRV.user.women.ID : "");
      this.form.get('fatherName')?.setValue(this.saveSRV.user.women.fatherName ? this.saveSRV.user.women.fatherName : "")
      this.form.get('grandfatherName')?.setValue(this.saveSRV.user.women.grandfatherName ? this.saveSRV.user.women.grandfatherName : "")
      this.form.get('greatGrandfatherName')?.setValue(this.saveSRV.user.women.greatGrandfatherName ? this.saveSRV.user.women.greatGrandfatherName : "")
      this.form.get('DOB')?.setValue(this.saveSRV.user.women.DOB ? this.saveSRV.user.women.DOB : "")
      this.form.get('email')?.setValue(this.saveSRV.user.women.email ? this.saveSRV.user.women.email : "")
      this.form.get('maritalStatus')?.setValue(this.saveSRV.user.women.maritalStatus ? this.saveSRV.user.women.maritalStatus : "")
    }
  }
}
