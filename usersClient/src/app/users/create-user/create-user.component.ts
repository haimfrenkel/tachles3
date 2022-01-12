import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models&Languages/users/userType'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      'userName': new FormControl('', Validators.required),
      men: new FormGroup({
        name: new FormGroup({
          'startName': new FormControl('', Validators.required),
          'firstName': new FormControl('', Validators.required),
          'lastName:': new FormControl('', Validators.required),
          'endName': new FormControl('', Validators.required),
        }),
        'fathersName': new FormControl('', Validators.required),
        'grandFatherName': new FormControl('', Validators.required),
        'greatGrandFatherName': new FormControl('', Validators.required),
        'email': new FormControl('', (Validators.email, Validators.required)),
        'maritalStatus': new FormControl('', Validators.required),
      }),
      women: new FormGroup({
        name: new FormGroup({
          'startName': new FormControl('', Validators.required),
          'firstName': new FormControl('', Validators.required),
          'lastName:': new FormControl('', Validators.required),
          'endName': new FormControl('', Validators.required),
        }),
        'fathersName': new FormControl('', Validators.required),
        'grandFatherName': new FormControl('', Validators.required),
        'greatGrandFatherName': new FormControl('', Validators.required),
        'email': new FormControl('', (Validators.email, Validators.required)),
        'maritalStatus': new FormControl('', Validators.required),
      }),
      address: new FormGroup({
        'state': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required),
        'street': new FormControl('', Validators.required),
        'buildingNumber': new FormControl('', Validators.required),
        'apartment': new FormControl('', Validators.required),
        'zipCode': new FormControl('', Validators.required),
      }),
      benkAccount: new FormGroup({
        'bankNo': new FormControl('', Validators.required),
        'bankName': new FormControl('', Validators.required),
        'branchNo': new FormControl('', Validators.required),
        'accountNo': new FormControl('', Validators.required),
      })
    })
  }
}
