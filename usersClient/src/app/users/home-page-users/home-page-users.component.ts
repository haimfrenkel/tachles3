import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-users',
  templateUrl: './home-page-users.component.html',
  styleUrls: ['./home-page-users.component.css']
})
export class HomePageUsersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
