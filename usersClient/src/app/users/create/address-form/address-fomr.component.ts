import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Address } from '../../../../models&Languages/users/address.interface';
import { CreateService } from '../create.service';


@Component({
  selector: 'app-address-fomr',
  templateUrl: './address-fomr.component.html',
  styleUrls: ['./address-fomr.component.css']
})
export class AddressFomrComponent implements OnInit {
  @Input() key
  @Output() data = new EventEmitter<Address>()
 
  form: FormGroup
  subscription: Subscription
  cities: any;
  streets:any;

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    console.log("key: ", this.key);

    this.saveSRV.get().subscribe((res)=>{ 
      this.cities = res.result.records.map(field=>field['שם יישוב'])
      console.log(this.cities)
    })
    this.saveSRV.getStreet().subscribe((res)=>{ 
      console.log("res",res)
    })
    
    this.initForm()
    this.subscription = this.form.valueChanges.subscribe(data => {
      if(this.key == "job"){
        this.sendData()
      } else {
        this.saveSRV.onSave("address", data)
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe
  }

  initForm() {
    this.form = new FormGroup({
      'state': new FormControl(''),
      'city': new FormControl(''),
      'street': new FormControl(''),
      'buildingNumber': new FormControl(''),
      'apartment': new FormControl(''),
      'zipCode': new FormControl(''),
    })
  }
  sendData() {
    this.data.emit(this.form.value)
  }
}

