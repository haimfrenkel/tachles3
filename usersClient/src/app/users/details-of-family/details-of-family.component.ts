import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details-of-family',
  templateUrl: './details-of-family.component.html',
  styleUrls: ['./details-of-family.component.css']
})
export class DetailsOfFamilyComponent implements OnInit {
  @Input() user;
  constructor(private userSRV: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  deleteThisUser(id: number) {
    this.userSRV.deleteUser(id).subscribe(data=>{
      this.router.navigate(['/users']);
    })
    
  }
}
