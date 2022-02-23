import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Address } from '../../../../models&Languages/users/address.interface';
import { CreateService } from '../create.service';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  @Input() key
  @Input() idx
  @Output() data = new EventEmitter<Address>()

  form: FormGroup
  subscription: Subscription
  cities: any;
  streets: any;
  city: any;

  constructor(private saveSRV: CreateService) { 
    this.initForm()
    this.editForm()
  }

  ngOnInit(): void {
   
    this.saveSRV.getCity().subscribe((res) => {
      this.cities = res.result.records
    })
    // this.saveSRV.getStreet().subscribe((res) => { })

    this.subscription = this.form.valueChanges.subscribe(data => {
      if (this.key.includes("Job")) {
        this.endEmitToParent()
      } else {
        this.saveSRV.onValueChange("address", data)
      }
    })
  }

  userAnswersClick(event) {
    this.city = this.form.get('city')?.value;
    this.saveSRV.getStreet(this.city).subscribe((res) => {      
      this.streets = res.result.records
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

  editForm() {
    console.log(this.key);
    
    if (this.key == "menJobs") {
      this.form.get('state')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.state ? this.saveSRV.user.men.jobs[this.idx].address.state : "ישראל");
      this.form.get('city')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.city ? this.saveSRV.user.men.jobs[this.idx].address.city : "");
      this.form.get('street')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.street ? this.saveSRV.user.men.jobs[this.idx].address.street : "");
      this.form.get('buildingNumber')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.buildingNumber ? this.saveSRV.user.men.jobs[this.idx].address.buildingNumber : 0);
      this.form.get('apartment')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.apartment ? this.saveSRV.user.men.jobs[this.idx].address.apartment : 0);
      this.form.get('zipCode')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.zipCode ? this.saveSRV.user.men.jobs[this.idx].address.zipCode : 0);
    }
    if (this.key == "womenJobs") {
      this.form.get('state')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.state ? this.saveSRV.user.women.jobs[this.idx].address.state : "ישראל");
      this.form.get('city')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.city ? this.saveSRV.user.women.jobs[this.idx].address.city : "");
      this.form.get('street')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.street ? this.saveSRV.user.women.jobs[this.idx].address.street : "");
      this.form.get('buildingNumber')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.buildingNumber ? this.saveSRV.user.women.jobs[this.idx].address.buildingNumber : 0);
      this.form.get('apartment')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.apartment ? this.saveSRV.user.women.jobs[this.idx].address.apartment : 0);
      this.form.get('zipCode')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.zipCode ? this.saveSRV.user.women.jobs[this.idx].address.zipCode : 0);
    }
    else {
      this.form.get('state')?.setValue(this.saveSRV.user.address.street ? this.saveSRV.user.address.street : "ישראל");
      this.form.get('city')?.setValue(this.saveSRV.user.address.city ? this.saveSRV.user.address.city : "");
      this.form.get('street')?.setValue(this.saveSRV.user.address.street ? this.saveSRV.user.address.street : "בחר רחוב");
      this.form.get('buildingNumber')?.setValue(this.saveSRV.user.address.buildingNumber ? this.saveSRV.user.address.buildingNumber : 0);
      this.form.get('apartment')?.setValue(this.saveSRV.user.address.apartment ? this.saveSRV.user.address.apartment : 0);
      this.form.get('zipCode')?.setValue(this.saveSRV.user.address.zipCode ? this.saveSRV.user.address.zipCode : 0);
    }
  }

  endEmitToParent() {
    this.data.emit(this.form.value)
  }
}

