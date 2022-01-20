import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Name } from 'src/models&Languages/users/name.interface';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  @Input() key;
  @Input() idx;
  @Output() data = new EventEmitter<Name>()

  form: FormGroup
  subscription: Subscription

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm();
    this.editForm();
    this.subscription = this.form.valueChanges.subscribe(data => {
      if (this.key == "child") {
        this.sendEmitToParent();
      } else {
        this.saveSRV.onSave(this.key, data);
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initForm() {
    this.form = new FormGroup({
      'startName': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'endName': new FormControl('', Validators.required),
    })
  }
  editForm() {
    if (this.key == "menName") {
      this.form.get('startName')?.setValue(this.saveSRV.user.men.name.startName ? this.saveSRV.user.men.name.startName : "")
      this.form.get('firstName')?.setValue(this.saveSRV.user.men.name.firstName ? this.saveSRV.user.men.name.firstName : "")
      this.form.get('lastName')?.setValue(this.saveSRV.user.men.name.lastName ? this.saveSRV.user.men.name.lastName : "")
      this.form.get('endName')?.setValue(this.saveSRV.user.men.name.endName ? this.saveSRV.user.men.name.endName : "")
    }
    if (this.key == "womenName") {
      this.form.get('startName')?.setValue(this.saveSRV.user.women.name.startName ? this.saveSRV.user.women.name.startName : "")
      this.form.get('firstName')?.setValue(this.saveSRV.user.women.name.firstName ? this.saveSRV.user.women.name.firstName : "")
      this.form.get('lastName')?.setValue(this.saveSRV.user.women.name.lastName ? this.saveSRV.user.women.name.lastName : "")
      this.form.get('endName')?.setValue(this.saveSRV.user.women.name.endName ? this.saveSRV.user.women.name.endName : "")
    }
    if(this.key == "child"){
      this.form.get('startName')?.setValue(this.saveSRV.user.children[this.idx].name.startName ? this.saveSRV.user.children[this.idx].name.startName : "")
      this.form.get('firstName')?.setValue(this.saveSRV.user.children[this.idx].name.firstName ? this.saveSRV.user.children[this.idx].name.firstName : "")
      this.form.get('lastName')?.setValue(this.saveSRV.user.children[this.idx].name.lastName ? this.saveSRV.user.children[this.idx].name.lastName : "")
      this.form.get('endName')?.setValue(this.saveSRV.user.children[this.idx].name.endName ? this.saveSRV.user.children[this.idx].name.endName : "")
    }
  }

  sendEmitToParent() {
    this.data.emit(this.form.value)
  }
}
