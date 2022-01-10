import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/types&Languages/users/userList.interface';
import { User } from 'src/types&Languages/users/userType';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  columnDefs = [
    {headerName:"ID", field: "ID",sortable:true, filter:true},
    {headerName:"firstName", field: "firstName"},
    {headerName:"lastName", field: "lastName",sortable:true, filter:true},
    {headerName:"fatherName", field: "fatherName"}, 
    {headerName:"foneNumber", field: "foneNumber"}, 
    {headerName:"city", field: "city",sortable:true, filter:true}
  ];
rowData = [
  { ID: "1", firstName: "ראובן", lastName: "כהן", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city1" },
  { ID: "2", firstName: "שמעון", lastName: "לוי", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city2" },
  { ID: "3", firstName: "לוי", lastName: "ישראל", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city3" },
  { ID: "4", firstName: "יהודה", lastName: "בנימין", fatherName: "fatherName1", foneNumber: "foneNumber1", city: "city1" }
];
users:User[]=[]
userList:UserList[]=[];

  constructor() { }

  ngOnInit(): void {
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

