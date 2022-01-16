import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-children-information',
  templateUrl: './children-information.component.html',
  styleUrls: ['./children-information.component.css']
})
export class ChildrenInformationComponent implements OnInit {
  @Input() children: any[];
  moreInfoChildren: boolean[]=[];

  constructor() { }

  ngOnInit(): void {
    
    for (let i = 0; i < this.children.length; i++) {
      this.moreInfoChildren[i]= false;
      
    }
  }
  childrenMore(i){
    console.log("i: ",i);
    
    if (this.moreInfoChildren[i]) {
      this.moreInfoChildren[i]= false
      
    } else {
      this.moreInfoChildren[i]= true
    }

  }
}
