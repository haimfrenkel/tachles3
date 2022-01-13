<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/types&Languages/users/userType';
>>>>>>> d2e58f60affedda2619e494fa18ab4f9d15dd135

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

=======
  id:number;
  // user={userName: "uriel shalom"}
  user=
    {
      "userName": "uriel shalom",
      "men": {
          "name": {
              "startName": "arav",
              "firstName": "dov ber",
              "lastName": "kenig",
              "endName": "shlita",
              "id": 23
          },
          "fatherName": "nachman",
          "grandfatherName": "dov",
          "greatGrandfatherName": "berl",
          "email": "hf36274@gmail.com",
          "maritalStatus": "married",
          "phones": [
              {
                  "number": 533130972,
                  "whatsapp": false,
                  "id": 25
              },
              {
                  "number": 535284896,
                  "whatsapp": false,
                  "id": 26
              }
          ],
          "jobs": [
              {
                  "address": {
                      "state": "",
                      "city": "",
                      "street": "arav ",
                      "buildingNumber": 0,
                      "apartment": 0,
                      "zipCode": 0,
                      "id": 20
                  },
                  "companyName": "",
                  "job": "Renovations contractor",
                  "id": 13
              }
          ],
          "id": 13,
          "dob": null
      },
      "women": {
          "name": {
              "startName": "marat",
              "firstName": "shifra",
              "lastName": "groman",
              "endName": "tlita",
              "id": 24
          },
          "fatherName": "avraham",
          "grandfatherName": null,
          "greatGrandfatherName": "yaakov",
          "email": "go@gmail.com",
          "maritalStatus": "married",
          "phones": [
              {
                  "number": 533130972,
                  "whatsapp": false,
                  "id": 27
              },
              {
                  "number": 535284896,
                  "whatsapp": false,
                  "id": 28
              }
          ],
          "jobs": [
              {
                  "address": {
                      "state": "israel",
                      "city": "jerusalem",
                      "street": "artom",
                      "buildingNumber": 14,
                      "apartment": 0,
                      "zipCode": 0,
                      "id": 21
                  },
                  "companyName": "intel",
                  "job": "Software developer ",
                  "id": 14
              }
          ],
          "id": 14,
          "dob": null
      },
      "role": null,
      "address": {
          "state": "israel",
          "city": "jerusalem",
          "street": "amos",
          "buildingNumber": 46,
          "apartment": 2,
          "zipCode": 0,
          "id": 19
      },
      "bankAccount": {
          "bankNo": 10,
          "bankName": "leumi",
          "branchNo": 695,
          "accountNo": 451081,
          "id": 7
      },
      "dateOfMarriage": null,
      "children": [
          {
              "name": {
                  "startName": "abach",
                  "firstName": "dov",
                  "lastName": "groman",
                  "endName": "eyu",
                  "id": 25
              },
              "sex": "male",
              "maritalStatus": "single",
              "placeOfStudy": "amala shel tora",
              "dob": null,
              "id": 11
          },
          {
              "name": {
                  "startName": "",
                  "firstName": "shira",
                  "lastName": "groman",
                  "endName": "",
                  "id": 26
              },
              "sex": "female",
              "maritalStatus": "single",
              "placeOfStudy": "bnot rachel",
              "dob": null,
              "id": 12
          }
      ],
      "shtibel": null,
      "id": 7
  }

  

constructor(private route:ActivatedRoute){
    this.route.params.subscribe((params:Params) => {
    this.id = params['id'];
    });
 }

ngOnInit(): void {
    console.log("this.id: ",this.id);
    console.log(this.user);
    
  }



>>>>>>> d2e58f60affedda2619e494fa18ab4f9d15dd135
}
