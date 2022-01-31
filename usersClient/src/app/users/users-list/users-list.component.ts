import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
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

  columnDefs: ColDef[] = [
    { headerName: "id", field: "id", sortable: true, filter: true },
    { headerName: "firstName", field: "firstName" },
    { headerName: "lastName", field: "lastName", sortable: true, filter: true },
    { headerName: "fatherName", field: "fatherName" },
    { headerName: "phoneNumber", field: "phoneNumber" },
    { headerName: "city", field: "city", sortable: true, filter: true }
  ];
  rowData: Observable<UserList[]>;

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.rowData = this.userService.getAllUsers().pipe(map(data => data.map(this.convertToUserList)));
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  NavToDetail(event) {
    console.log("event.data.id:", event.data.id);
    this.router.navigate(['users/personal-card', event.data.id]);

  }

  convertToUserList(data: User): UserList {
    let user: UserList = {
      "id": data.id,
      "firstName": data.men.name.firstName,
      "lastName": data.men.name.lastName,
      "fatherName": data.men.fatherName,
      "phoneNumber": data.men.phones[0]?.number ? data.men.phones[0].number : 0,
      "city": data.address.city,
    }
    return user
  }
}
