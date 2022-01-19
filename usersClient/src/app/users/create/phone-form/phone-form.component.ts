import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  initForm() {
    this.form = new FormGroup({
      phones: new FormArray([
        new FormGroup({
          'number': new FormControl(),
          'whatsapp': new FormControl()
        })
      ])
    })
  }

  get phones() {
    return this.form.controls["phones"] as FormArray
  }

  addPhones() {
    const phonesForm = new FormGroup({
      'number': new FormControl(),
      'whatsapp': new FormControl()
    });
    this.phones.push(phonesForm);
  }
  save(e: any) {
    console.log(this.form.value);
  }
}

