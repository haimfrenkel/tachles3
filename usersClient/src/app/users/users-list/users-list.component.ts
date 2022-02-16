import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { UserList } from '../../../models&Languages/users/userList.interface';
import { User } from '../../../models&Languages/users/userType';
import { map, Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  private gridApi!: GridApi;
  columnDefs: ColDef[] = [
    { headerName: "שם משתמש", field: "username", sortable: true, filter: true },
    { headerName: "שם פרטי", field: "firstName" },
    { headerName: "שם משפחה", field: "lastName", sortable: true, filter: true },
    { headerName: "שם האב", field: "fatherName" },
    { headerName: "מספר טלפון", field: "phoneNumber" },
    { headerName: "עיר מגורים", field: "city", sortable: true, filter: true }
  ];
  rowData: Observable<UserList[]>;

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {    
    this.rowData = this.userService.getAllUsers().pipe(map((data: User[]) => data.map(this.convertToUserList)));
  }

 

  NavToDetail(event) {
    this.router.navigate(['users/personal-card', event.data.id]);
  }
 
  convertToUserList(data: User): UserList {    
    let user: UserList = {
      "id": data.id,
      "username": data.userName,
      "firstName": data.men.name.firstName,
      "lastName": data.men.name.lastName,
      "fatherName": data.men.fatherName,
      "phoneNumber": data.men.phones[0]?.number ? data.men.phones[0].number : 0,
      "city": data.address.city,
    }    
    return user
  }
}
