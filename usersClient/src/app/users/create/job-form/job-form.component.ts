import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  subscription: Subscription
  form: FormGroup
  arrayOfJobs: Job[] = [];
  address: Address
  sowButtontAdd: number = 0

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm() 
    this.subscription = this.form.valueChanges.subscribe(data=>{
      this.saveSRV.onValueChange(this.key, data)            
    })   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
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

  addJobs() {
    const jobForm = new FormGroup({
      'companyName': new FormControl(),
      'job': new FormControl(),
    });
    this.jobs.push(jobForm);
    this.sowButtontAdd++;
  }
}
