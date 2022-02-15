import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models&Languages/users/userType';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-personal-card',
    templateUrl: './personal-card.component.html',
    styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {
    id;
    // user={userName: "uriel shalom"}
    user: User;

    constructor(public route: ActivatedRoute, private userService: UserService) { }

    
    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get("id")
        this.userService.getOne(this.id).subscribe((data: User)=>{
            this.user = data;
            console.log(this.user);
            
        })
    }
}
