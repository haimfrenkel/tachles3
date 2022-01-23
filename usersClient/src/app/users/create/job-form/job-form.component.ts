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
  convert: Job
  address: Address
  keyForAddress: string = "job"
  sowButtontAdd:number =0

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
    console.log(this.saveSRV.user);

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
    this.createData(idx)
    this.saveSRV.onSave(this.key, this.convert)
    const jobForm = new FormGroup({
      'companyName': new FormControl(),
      'job': new FormControl(),
    });
    this.jobs.push(jobForm);  
    this.sowButtontAdd++;  
  }

  pushAddress(data: any) {
    console.log("pushAddress.data: ",data );
    
    this.address = data
  }

  createData(idx: number){
    this.convert = {
      job: this.form.get(['jobs',idx, 'job'])?.value,
      companyName: this.form.get(['jobs',idx, 'companyName'])?.value,
      address: this.address
    }   
  }

}
