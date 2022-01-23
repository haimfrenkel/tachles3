import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Child } from 'src/models&Languages/users/child.interface';
import { Name } from 'src/models&Languages/users/name.interface';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {
  @Input() key

  idx: number;
  form: FormGroup
  convert: Child
  name: Name
  keyForName: string = "child"
  sowButtontAdd:number =0
  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.form = new FormGroup({
      children: new FormArray([
        new FormGroup({
          'dob': new FormControl(),
          'sex': new FormControl(),
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
    this.saveSRV.onSave(this.key, this.convert)
    const childForm = new FormGroup({
      'dob': new FormControl(),
      'sex': new FormControl(),
      'maritalStatus': new FormControl(),
      'placeOfStudy': new FormControl()
    });
    this.children.push(childForm);
    this.sowButtontAdd++;
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
}
