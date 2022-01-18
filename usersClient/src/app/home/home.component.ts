import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
e404:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  eror404(){
    
    
    if (this.e404) {
      this.e404= false
      
    } else {
      this.e404= true
    }

  }

}
