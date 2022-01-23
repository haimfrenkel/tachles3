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
  @Input() key
  @Output() data = new EventEmitter<Name>()

  form: FormGroup
  subscription: Subscription
  startNameOptions: string[] = [" ","הרב", "הרה''ג", "מרת","הרבנית", ];
  endNameOptions: string[] = [" ", "שליט''א", "תליט''א", "הי''ו", "נ''י", "'תחי"];

  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {    
    this.initForm()
    this.subscription = this.form.valueChanges.subscribe(data => {
      if(this.key == "child"){
        this.sendData();
      } else {
        this.saveSRV.onSave(this.key, data);
      }
    })
  }
  userAnswersClick(event){
    console.log("event: ",event);
    

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
  
  sendData() {
    this.data.emit(this.form.value)
  }
}
