import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-of-family',
  templateUrl: './details-of-family.component.html',
  styleUrls: ['./details-of-family.component.css']
})
export class DetailsOfFamilyComponent implements OnInit {
@Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
