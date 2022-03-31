import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-print',
  templateUrl: './address-print.component.html',
  styleUrls: ['./address-print.component.css']
})
export class AddressPrintComponent implements OnInit {
@Input() address;
  constructor() { }

  ngOnInit(): void {
  }

}
