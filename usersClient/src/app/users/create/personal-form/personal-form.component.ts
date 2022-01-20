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
  @Input() person;
  keyForJob: string
  keyForName: string
  form: FormGroup;
  subscription: Subscription

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
    this.keyForJob = `${this.person}Jobs`
    this.keyForName = `${this.person}Name`
    this.subscription = this.form.valueChanges.subscribe(data => {
      this.saveSRV.onSave(this.person, data)
    })
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
}
