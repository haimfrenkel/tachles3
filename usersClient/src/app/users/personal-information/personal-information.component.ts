import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
@Input() personalName;
moreInfoJob : boolean[]=[];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.personalName.jobs.length; i++) {
      this.moreInfoJob[i]= false;
      
    }
   

    
  }
  jobClick(i){
    if (this.moreInfoJob[i]) {
      this.moreInfoJob[i]= false
      
    } else {
      this.moreInfoJob[i]= true
    }

  }

}
