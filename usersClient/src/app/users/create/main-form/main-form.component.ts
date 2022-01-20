import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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


  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
    this.form.valueChanges.subscribe(data => {
      this.saveSRV.onSave("", data)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe
  }

  initForm() {
    this.form = new FormGroup({
      'userName': new FormControl(),
      'dateOfMarriage': new FormControl(),
      'shtibel': new FormControl(),
    })
  }

  next() {
    if (this.nextToPersonal) {
      this.nextToPersonal = false
    } else {
    } this.nextToPersonal = true
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
    console.log(this.numberOfChildren);
  }

  save() {

  }
}
