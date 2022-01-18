import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  form: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      jobs: new FormArray([
        new FormGroup({
          'companyName': new FormControl(),
          'job': new FormControl(),
         
        })
      ])
    })
  }

  get jobs() {
    return this.form.controls["jobs"] as FormArray
  }

  addChildern() {
    const childForm = new FormGroup({
      'companyName': new FormControl(),
          'job': new FormControl(),
    });
    this.jobs.push(childForm);
  }

}
