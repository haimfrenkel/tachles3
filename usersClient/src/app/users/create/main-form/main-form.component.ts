import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  subscription: Subscription
  form: FormGroup;
  children: number[] = [];
  numberOfChildren = 0
  nextToPersonal: boolean = false;
  nextToChild: boolean = false;


  constructor(private saveSRV: CreateService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
    this.editForm()
    this.subscription = this.form.valueChanges.subscribe(data => {
      this.saveSRV.onValueChange("main", data)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


  initForm() {
    this.form = new FormGroup({
      'userName': new FormControl(),
      'dateOfMarriage': new FormControl(),
      'shtibel': new FormControl(),
    })
  }

  editForm() { 
    this.form.get('userName')?.setValue(this.saveSRV.user.userName ? this.saveSRV.user.userName : "")
    this.form.get('dateOfMarriage')?.setValue(this.saveSRV.user.dateOfMarriage ? this.saveSRV.user.dateOfMarriage : "")
    this.form.get('shtibel')?.setValue(this.saveSRV.user.shtibel ? this.saveSRV.user.shtibel : "")
  }

  next() {
    if (this.nextToPersonal) {
      this.nextToPersonal = false
    } else {
      this.nextToPersonal = true
    }
  }

  next_to_child() {
    this.addChild()
    this.nextToPersonal = false
    if (this.nextToChild) {
      this.nextToChild = false
    } else {
      this.nextToChild = true
    }
  }

  addChild() {
    this.numberOfChildren++;
    this.children.push(this.numberOfChildren);
  }

  save() {
    this.saveSRV.save().subscribe(data => {
      this.saveSRV.initUser();
      this.router.navigate(["/users"])
    })
  }
}
