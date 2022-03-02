import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  @Input() key
  subscription: Subscription
  form: FormGroup;
  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
    this.subscription = this.form.valueChanges.subscribe(data => {
      this.saveSRV.onValueChange(this.key, data)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
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
}

