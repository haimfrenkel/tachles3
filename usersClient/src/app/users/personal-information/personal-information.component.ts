import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
@Input() personalName;
  constructor() { }

  ngOnInit(): void {
    console.log("personalName:" ,this.personalName);
    console.log(" this.personalName.name.startName:" , this.personalName.name.startName);

    
  }

}
