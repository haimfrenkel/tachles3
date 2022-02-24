import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Address } from 'src/models&Languages/users/address.interface';
import { Job } from 'src/models&Languages/users/job.interface';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  @Input() key
  form: FormGroup
  arrayOfData: Job[] = [];
  address: Address
  sowButtontAdd: number = 0

  constructor(private saveSRV: CreateService) { }

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

  addJobs(idx: number) {
    this.parseToJobObject(idx)
    const jobForm = new FormGroup({
      'companyName': new FormControl(),
      'job': new FormControl(),
    });
    this.jobs.push(jobForm);
    this.sowButtontAdd++;
  }

  saveJob(idx: number) {
    this.parseToJobObject(idx)
    console.log(this.arrayOfData);

    this.saveSRV.onValueChange(this.key, this.arrayOfData)
  }

  onPushAddress(data: Address) {
    this.address = data
  }

  parseToJobObject(idx: number) {
    
    const convert: Job = {
      job: this.form.get(['jobs', idx, 'job'])?.value,
      companyName: this.form.get(['jobs', idx, 'companyName'])?.value,
      address: this.address
    }
    this.arrayOfData.push(convert)
  }
}
