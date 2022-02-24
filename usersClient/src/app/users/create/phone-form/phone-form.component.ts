import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  @Input() key
  keyForPhone: string
  form: FormGroup;
  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.keyForPhone = `${this.key}Phones`
    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      phones: new FormArray([
        new FormGroup({
          'number': new FormControl(0),
          'whatsapp': new FormControl(false)
        })
      ])
    })
  }

  get phones() {
    return this.form.controls["phones"] as FormArray
  }

  addPhone() {
    const phonesForm = new FormGroup({
      'number': new FormControl(0),
      'whatsapp': new FormControl(false)
    });
    this.phones.push(phonesForm);
  }

  savePhones() {
    this.saveSRV.onValueChange(this.keyForPhone, this.form.value)    
  }
}

