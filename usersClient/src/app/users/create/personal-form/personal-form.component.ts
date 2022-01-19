import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  @Input() person;
  
  form: FormGroup;
  constructor(private create: CreateService) { }

  ngOnInit(): void {
    
    console.log("person: ",this.person);
    
  }

  initForm() {
    this.form = new FormGroup({
      'ID': new FormControl(),
      'fatherName': new FormControl(),
      'grandfatherName': new FormControl(),
      'greatGrandfatherName': new FormControl(),
      'DOB': new FormControl(),
      'email': new FormControl(),
      'maritalStatus': new FormControl(),
    })
  }
}
