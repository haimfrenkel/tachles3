import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Input() key

  idx: number;
  form: FormGroup;
  convert: Child;
  name: Name;
  keyForName: string = "child";
  sowButtontAdd: number = 0;
  keyForChildern: string = 'children';
  MainFormComponent: any;

  constructor(private saveSRV: CreateService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm()
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

  addChildern(idx: number) {
    this.createData(idx)
    const childForm = new FormGroup({
      'dob': new FormControl(),
      'gender': new FormControl(),
      'maritalStatus': new FormControl(),
      'placeOfStudy': new FormControl()
    });
    this.sowButtontAdd++
    this.children.push(childForm);
  }

  pushName(data: any) {
    this.name = data
  }

  createData(idx: number) {
    this.convert = {
      dob: this.form.get(['children', idx, 'dob'])?.value,
      gender: this.form.get(['children', idx, 'gender'])?.value,
      maritalStatus: this.form.get(['children', idx, 'maritalStatus'])?.value,
      placeOfStudy: this.form.get(['children', idx, 'placeOfStudy'])?.value,
      name: this.name
    }
  }

  saveChild() {
    this.saveSRV.onValueChange(this.keyForChildern, this.form.value)
    console.log(this.saveSRV.user);
    
    this.saveSRV.save().subscribe(data => {
      this.saveSRV.initUser();
      this.router.navigate(["/users"])
    })
  }
}
