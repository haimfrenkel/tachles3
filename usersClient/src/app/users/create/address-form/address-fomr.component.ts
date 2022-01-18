import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-fomr',
  templateUrl: './address-fomr.component.html',
  styleUrls: ['./address-fomr.component.css']
})
export class AddressFomrComponent implements OnInit {

  form: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      'state': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'street': new FormControl('', Validators.required),
      'buildingNumber': new FormControl('', Validators.required),
      'apartment': new FormControl('', Validators.required),
      'zipCode': new FormControl('', Validators.required),
    })
  }
}
