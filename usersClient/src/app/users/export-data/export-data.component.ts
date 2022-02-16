import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CsvExportModule } from 'ag-grid-community';
import { map, Observable } from 'rxjs';
import { usersListForExport } from 'src/models&Languages/users/usersListForExport';
import { User } from 'src/models&Languages/users/userType';
import { UserService } from '../services/user.service';
// import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColDef, ColGroupDef, GridApi, GridReadyEvent, Module } from 'ag-grid-community';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit {
  
  private gridApi!: GridApi;
  public popupParent: HTMLElement = document.body;
  // public modules: Module[] = [
  //   ClientSideRowModelModule,
  //   CsvExportModule,
  //   ExcelExportModule,
  //   MenuModule,
  // ];

  columnDefs: ColDef[] = [
    { headerName: "שם משתמש", field: "username", sortable: true, filter: true },
    { headerName: "תאריך נישואין", field: "dateOfMarriage" },
    { headerName: "שטיבל", field: "shtibel", sortable: true, filter: true },
    { headerName: "כינוי התחלה", field: "startName" },
    { headerName: "שם פרטי", field: "firstName" },
    { headerName: "שם משפחה", field: "lastName", sortable: true, filter: true },
    { headerName: "כינוי סוף", field: "endName", sortable: true, filter: true },
    { headerName: "שם האב", field: "fatherName" },
    { headerName: "שם הסב", field: "grandfatherName", sortable: true, filter: true },
    { headerName: "שם אבי הסב", field: "greatGrandfatherName" },
    { headerName: "תאריך לידה", field: "DOB" },
    { headerName: "אמייל", field: "email", sortable: true, filter: true },
    { headerName: "סטטוס נישואין", field: "maritalStatus", sortable: true, filter: true },
    { headerName: "מספר טלפון", field: "phoneNumber" },
    { headerName: "whatsapp", field: "whatsapp", sortable: true, filter: true },
    { headerName: "1 כינוי התחלה", field: "startName1" },
    { headerName: "1 שם פרטי", field: "firstName1" },
    { headerName: "1 שם משפחה", field: "lastName1", sortable: true, filter: true },
    { headerName: "1 כינוי סוף", field: "endName1", sortable: true, filter: true },
    { headerName: "1 שם האב", field: "fatherName1" },
    { headerName: "1 שם הסב", field: "grandfatherName1", sortable: true, filter: true },
    { headerName: "1 שם אבי הסב", field: "greatGrandfatherName1" },
    { headerName: "1 תאריך לידה", field: "DOB1" },
    { headerName: "1 אמייל", field: "email1", sortable: true, filter: true },
    { headerName: "1 סטטוס נישואין", field: "maritalStatus1", sortable: true, filter: true },
    { headerName: "1 מספר טלפון", field: "phoneNumber1" },
    { headerName: "1 whatsapp", field: "whatsapp1", sortable: true, filter: true },
    { headerName: "מספר ילדים", field: "numberOfKids", sortable: true, filter: true },
    { headerName: "מדינה", field: "state" },
    { headerName: "עיר", field: "city", sortable: true, filter: true },
    { headerName: "רחוב", field: "street", sortable: true, filter: true },
    { headerName: "מספר בניין", field: "buildingNumber" },
    { headerName: "מספר דירה", field: "apartmentNumber", sortable: true, filter: true },
    { headerName: "מיקוד", field: "zip" },
    { headerName: "מספר בנק", field: "bankNo" },
    { headerName: "שם הבנק", field: "bankName", sortable: true, filter: true },
    { headerName: "מספר סניף", field: "branchNo", sortable: true, filter: true },
    { headerName: "מספר חשבון", field: "accoutNo", sortable: true, filter: true }
  ];
  rowData: Observable<usersListForExport[]>;

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.rowData = this.userService.getAllUsers().pipe(map((data: User[]) => data.map(this.convertToexportFile)));
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }



  convertToexportFile(data: User): usersListForExport {    
    let user: usersListForExport = {
      "username": data.userName,
      "dateOfMarriage": data.dateOfMarriage,
      "shtibel": data.shtibel,
      "startName": data.men.name.startName,
      "firstName": data.men.name.firstName,
      "lastName": data.men.name.lastName,
      "endName": data.men.name.endName,
      "fatherName": data.men.fatherName,
      "grandfatherName": data.men.grandfatherName,
      "greatGrandfatherName": data.men.greatGrandfatherName,
      "DOB": data.men.DOB,
      "email": data.men.email,
      "maritalStatus": data.men.maritalStatus,
      "phoneNumber": data.men.phones[0]?.number ? data.men.phones[0].number : 0,
      "whatsapp": data.men.phones[0]?.whatsapp ? data.men.phones[0].whatsapp : false,
      "startName1": data.women.name.startName,
      "firstName1": data.women.name.firstName,
      "lastName1": data.women.name.lastName,
      "endName1": data.women.name.endName,
      "fatherName1": data.women.fatherName,
      "grandfatherName1": data.women.grandfatherName,
      "greatGrandfatherName1": data.women.greatGrandfatherName,
      "DOB1": data.women.DOB,
      "email1": data.women.email,
      "maritalStatus1": data.women.maritalStatus,
      "phoneNumber1": data.women.phones[0]?.number ? data.men.phones[0].number : 0,
      "whatsapp1": data.women.phones[0]?.whatsapp ? data.men.phones[0].whatsapp : false,
      "numberOfKids": data.children.length,
      "state": data.address.state,
      "city": data.address.city,
      "street": data.address.street,
      "buildingNumber": data.address.buildingNumber,
      "apartmentNumber": data.address.apartment,
      "zip": data.address.zipCode,
      "bankNo": data.bankAccount.bankNo,
      "bankName": data.bankAccount.bankName,
      "branchNo": data.bankAccount.branchNo,
      "accoutNo": data.bankAccount.accountNo
    }
    return user
  }
}