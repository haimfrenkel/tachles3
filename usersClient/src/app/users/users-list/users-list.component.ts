import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserList } from '../../../models&Languages/users/userList.interface';
import { User } from '../../../models&Languages/users/userType';
import { Observable } from 'rxjs';
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
  rowData: Observable<any[]>;

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private userService: UserService, private router: Router) {


  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
    });

    this.rowData = this.userService.getAllUsers();
  }

  onCellClicked(e) {
    console.log("onCellClicked is up");
    console.log("event: ", e);
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

  getAllUser(data: User[]): UserList[] {
    let userList: UserList[] = []
    for (let i = 0; i < data.length; i++) {
      let user: UserList = {
        "ID": 5,
        "firstName": data[i].men.name.firstName,
        "lastName": data[i].men.name.lastName,
        "fatherName": data[i].men.fatherName,
        "phoneNumber": data[i].men.phones[0]?.number ? data[i].men.phones[0].number : 0,
        "city": data[i].address.city,
      }
      userList.push(user)
    }
    return userList
  }

}


// <ag-grid-angular
//     #agGrid
//     style="width: 100%; height: 75vh;"
//     class="ag-theme-alpine"
//     [rowData]="rowData | async"
//     [columnDefs]="columnDefs"
//     rowSelection="multiple"
//     row-animation
//     pagination
//     suppressCellSelection="true"
//     (selectionChanged)="onSelectionChanged($event)"
//     (gridReady)="onGridReady($event)" 
//     [suppressRowClickSelection]="!restore"
//     (rowDoubleClicked)='NavToDetail($event)'
//     [defaultColDef]="defaultColDef">


//     >
// </ag-grid-angular>

