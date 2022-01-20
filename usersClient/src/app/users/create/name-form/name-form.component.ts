import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  @Input() key
  form: FormGroup;
  constructor(private saveSRV: CreateService) { }

  ngOnInit(): void {
    this.initForm()
    this.form.valueChanges.subscribe(data=>{
      this.saveSRV.onSave(this.key, data)
    })
  }

  initForm() {
    this.form = new FormGroup({
      'startName': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'endName': new FormControl('', Validators.required),
    })
  }
  
}
