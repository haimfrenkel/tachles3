import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from '../../../models&Languages/users/userType'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup
  phonesForm: FormArray;
  jobsForm: FormArray;
  childrenForm: FormArray
  addressForm: FormGroup;
  nameForm: FormGroup;
  upForm = FormGroup;
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.initForm()
    console.log(this.form.value);
    this.form.valueChanges.subscribe(data=>{
      console.log(data);
      
    })
  }

  initForm() {
    this.form = new FormGroup({
      'userName': new FormControl('', Validators.required),
      men: new FormGroup({
        name: this.initNameForm(),
        'fathersName': new FormControl('', Validators.required),
        'grandFatherName': new FormControl('', Validators.required),
        'greatGrandFatherName': new FormControl('', Validators.required),
        phones: this.initPhoneForm(),
        jobs: new FormArray([
          new FormGroup({
            address: new FormGroup({
              'state': new FormControl('', Validators.required),
              'city': new FormControl('', Validators.required),
              'street': new FormControl('', Validators.required),
              'buildingNumber': new FormControl('', Validators.required),
              'apartment': new FormControl('', Validators.required),
              'zipCode': new FormControl('', Validators.required),
            }),
            'componyName': new FormControl(''),
            'job': new FormControl('')
          })
        ]),
        'email': new FormControl('', (Validators.email, Validators.required)),
        'maritalStatus': new FormControl('', Validators.required),
      }),
      women: new FormGroup({
        name: this.initNameForm(),
        'fathersName': new FormControl('', Validators.required),
        'grandFatherName': new FormControl('', Validators.required),
        'greatGrandFatherName': new FormControl('', Validators.required),
        // phones: this.phonesForm,
        jobs: new FormArray([
          new FormGroup({
            address: new FormGroup({
              'state': new FormControl('', Validators.required),
              'city': new FormControl('', Validators.required),
              'street': new FormControl('', Validators.required),
              'buildingNumber': new FormControl('', Validators.required),
              'apartment': new FormControl('', Validators.required),
              'zipCode': new FormControl('', Validators.required),
            }),
            'componyName': new FormControl(''),
            'job': new FormControl('')
          })
        ]),
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
      }),
      'dateOfBirth': new FormControl(),
      children: new FormArray([
        new FormGroup({
          'name': new FormGroup({
            'startName': new FormControl('', Validators.required),
            'firstName': new FormControl('', Validators.required),
            'lastName:': new FormControl('', Validators.required),
            'endName': new FormControl('', Validators.required),
          }),
          'sex': new FormControl(),
          'maritalStatus': new FormControl(),
          'placeOfstudy': new FormControl(),
          'dateOfBirth': new FormControl()
        })
      ])
    })
    // this.phonesForm = new FormArray([
    //   new FormGroup({
    //     'Number': new FormControl(''),
    //     'whatsapp': new FormControl('')
    //   })
    // ])

  }

  initNameForm(): FormGroup {
    return new FormGroup({
      'startName': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'endName': new FormControl('', Validators.required),
    })
  }

  initPhoneForm(): FormArray {
    return new FormArray([
      new FormGroup({
        'Number': new FormControl(''),
        'whatsapp': new FormControl('')
      })
    ])
  }

  get phones() {
    console.log(this.form.get("men")?.get('phones')?.value);
    
    return this.form.get("men")?.get('phones') as FormArray;
  }

  get jobs() {
    return this.form.controls["jobs"] as FormArray;
  }

  get children() {
    return this.form.controls["children"] as FormArray;
  }


  addPhone() {
    const phone = this.phonesForm
    this.phones.push(phone);
  }

  addChildren() {
    const childrenForm = new FormGroup({
      'name': new FormGroup({
        'startName': new FormControl('', Validators.required),
        'firstName': new FormControl('', Validators.required),
        'lastName:': new FormControl('', Validators.required),
        'endName': new FormControl('', Validators.required),
      }),
      'sex': new FormControl(),
      'maritalStatus': new FormControl(),
      'placeOfstudy': new FormControl(),
      'dateOfBirth': new FormControl()

    });
    this.children.push(childrenForm);
  }

  addJob() {
    const jobForm = new FormGroup({
      address: new FormGroup({
        'state': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required),
        'street': new FormControl('', Validators.required),
        'buildingNumber': new FormControl('', Validators.required),
        'apartment': new FormControl('', Validators.required),
        'zipCode': new FormControl('', Validators.required),
      }),
      'componyName': new FormControl(''),
      'job': new FormControl('')
    })
    this.jobs.push(jobForm);
  }

  save(user: User) {
    console.log(this.form.value);
  }

}
