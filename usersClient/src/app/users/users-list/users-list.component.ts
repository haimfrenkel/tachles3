import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserList } from '../../../models&Languages/users/userList.interface';
import { User } from '../../../models&Languages/users/userType';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  columnDefs1: ColDef[] = [
    {headerName:"id", field: "id",sortable:true, filter:true},
    {headerName:"firstName", field: "firstName"},
    {headerName:"lastName", field: "lastName",sortable:true, filter:true},
    {headerName:"fatherName", field: "fatherName"}, 
    {headerName:"foneNumber", field: "foneNumber"}, 
    {headerName:"city", field: "city",sortable:true, filter:true}
  ];
rowData1 = [
  { id: "1", firstName: "ראובן", lastName: "כהן", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city1" },
  { id: "2", firstName: "שמעון", lastName: "לוי", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city2" },
  { id: "3", firstName: "לוי", lastName: "ישראל", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city3" },
  { id: "4", firstName: "יהודה", lastName: "בנימין", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city1" }
];

users:User[]=[]
userList:UserList[]=[];
columnDefs: ColDef[] = [
  { field: 'make', sortable: true, filter: true },
  { field: 'model', sortable: true, filter: true },
  { field: 'price', sortable: true, filter: true }
];
rowData: Observable<any[]>;
@ViewChild('agGrid') agGrid!: AgGridAngular;
  constructor(private http: HttpClient,  private router: Router) {
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    console.log(" this.rowData:", this.rowData);
    
   }

  ngOnInit(): void {
  }
  onCellClicked(e){
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
        console.log("event.data.id:" ,event.data.id);       
        this.router.navigate(['users/personal-card', event.data.id]);
        
  }
   // getAllUser(){
    
  //   this.baseService.getAll("string").subscribe(date=>{ 
  //     this.users= date;
  //     for (let i = 0; i < this.users.length; i++) {
  //         this.userList[0].ID = this.users[0].ID;
  //         this.userList[0].city = this.users[0].address.city;
  //         this.userList[0].fatherName = this.users[0].men.fatherName;
  //         this.userList[0].firstName = this.users[0].men.name.firstName;
  //         this.userList[0].lastName = this.users[0].men.name.lastName;
  //         this.userList[0].foneNumber = this.users[0].men.phones[0].number;
            
  //       }
  //     })   
  // }

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

