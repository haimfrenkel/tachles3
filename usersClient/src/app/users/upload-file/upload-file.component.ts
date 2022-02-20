import { Component, OnInit } from '@angular/core';
import { User } from 'src/models&Languages/users/userType';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  fileName = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      let formData = new FormData();
      formData.append("file", file);    
      this.userService.uploadFile(formData).subscribe(data=>{
       formData = new FormData()
      })
    }
  }
}
