import { ThrowStmt } from '@angular/compiler';
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
  @Input() idx
  @Output() data = new EventEmitter<Address>()
 
  form: FormGroup
  subscription: Subscription
  cities: any;
  streets:any;
  city:any;

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    console.log("key: ", this.key);

    this.saveSRV.getCity().subscribe((res)=>{ 
      this.cities = res.result.records.map(field=>field['שם יישוב'])
    })
    this.saveSRV.getStreet().subscribe((res)=>{ 
    })
    // this.saveSRV.getStreet().subscribe((res)=>{ 
    //   this.streets = res.result.records.map(field=>field['שם רחוב'])
    //   console.log("res",res)
    // })
    
    this.initForm()
    this.subscription = this.form.valueChanges.subscribe(data => {
      if (this.key == "job") {
        this.endEmitToParent()
      } else {
        this.saveSRV.onValueChange("address", data)
      }
    })
  }
  userAnswersClick(event){
    console.log("this.form.value.city['סמל יישוב']: " ,this.form.value.city['סמל יישוב']);
    this.city=this.form.value.city;
    this.saveSRV.getStreet().subscribe((res)=>{ 
      // console.log("res",res)
      this.streets = res.result.records.filter(s=>s['סמל_ישוב']==this.city['סמל יישוב'])
      // console.log(this.streets)
    
    //   this.streets = res.result.records.filter(s=>s['שם רחוב']== this.form.value.city)
    //   console.log(this.streets)
    })
    // console.log("streets: ",this.streets);

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
    if (this.key == "menJobs") {
      this.form.get('state')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.state ? this.saveSRV.user.men.jobs[this.idx].address.state : "");
      this.form.get('city')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.city ? this.saveSRV.user.men.jobs[this.idx].address.city : "");
      this.form.get('street')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.street ? this.saveSRV.user.men.jobs[this.idx].address.street : "");
      this.form.get('buildingNumber')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.buildingNumber ? this.saveSRV.user.men.jobs[this.idx].address.buildingNumber : 0);
      this.form.get('apartment')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.apartment ? this.saveSRV.user.men.jobs[this.idx].address.apartment : 0);
      this.form.get('zipCode')?.setValue(this.saveSRV.user.men.jobs[this.idx].address.zipCode ? this.saveSRV.user.men.jobs[this.idx].address.zipCode : 0);
    }
    if (this.key == "womenJobs") {
      this.form.get('state')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.state ? this.saveSRV.user.women.jobs[this.idx].address.state : "");
      this.form.get('city')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.city ? this.saveSRV.user.women.jobs[this.idx].address.city : "");
      this.form.get('street')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.street ? this.saveSRV.user.women.jobs[this.idx].address.street : "");
      this.form.get('buildingNumber')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.buildingNumber ? this.saveSRV.user.women.jobs[this.idx].address.buildingNumber : 0);
      this.form.get('apartment')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.apartment ? this.saveSRV.user.women.jobs[this.idx].address.apartment : 0);
      this.form.get('zipCode')?.setValue(this.saveSRV.user.women.jobs[this.idx].address.zipCode ? this.saveSRV.user.women.jobs[this.idx].address.zipCode : 0);
    }
    else {
      this.form.get('state')?.setValue(this.saveSRV.user.address.state ? this.saveSRV.user.address.state : "");
      this.form.get('city')?.setValue(this.saveSRV.user.address.city ? this.saveSRV.user.address.city : "");
      this.form.get('street')?.setValue(this.saveSRV.user.address.street ? this.saveSRV.user.address.street : "");
      this.form.get('buildingNumber')?.setValue(this.saveSRV.user.address.buildingNumber ? this.saveSRV.user.address.buildingNumber : 0);
      this.form.get('apartment')?.setValue(this.saveSRV.user.address.apartment ? this.saveSRV.user.address.apartment : 0);
      this.form.get('zipCode')?.setValue(this.saveSRV.user.address.zipCode ? this.saveSRV.user.address.zipCode : 0);
    }
  }

  endEmitToParent() {
    this.data.emit(this.form.value)
  }
}

