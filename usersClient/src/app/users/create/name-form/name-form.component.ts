import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm()
    this.form.valueChanges.subscribe(data=>{
      console.log(data);
    })
  }

  initForm() {
    this.form = new FormGroup({
      'startName': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName:': new FormControl('', Validators.required),
      'endName': new FormControl('', Validators.required),
    })
  }
  
}
