import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Child } from 'src/models&Languages/users/child.interface';
import { Name } from 'src/models&Languages/users/name.interface';
import { CreateService } from '../create.service';
import { MainFormComponent } from '../main-form/main-form.component';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {
  maritalStatusOptions:string[]=[" ","רווק/ה",  "נשוי/ה",  "גרוש/ה",  "אלמן/ה" ]
  idx: number;
  form: FormGroup;
  name: Name;
  keyForName: string = "child";
  keyForChildern: string = 'children';
  subscription: Subscription

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    
    this.initForm()
    this.subscription = this.form.valueChanges.subscribe(data=>{
      this.saveSRV.onValueChange("children", data)            
    })   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  initForm() {
    this.form = new FormGroup({
      children: new FormArray([
        new FormGroup({
          'dob': new FormControl(),
          'gender': new FormControl(),
          'maritalStatus': new FormControl(),
          'placeOfStudy': new FormControl()
        })
      ])
    })
  }

  get children() {
    return this.form.controls["children"] as FormArray
  }

  addChildern() {
    const childForm = new FormGroup({
      'dob': new FormControl(),
      'gender': new FormControl(),
      'maritalStatus': new FormControl(),
      'placeOfStudy': new FormControl()
    });
    this.children.push(childForm);
  }
}
