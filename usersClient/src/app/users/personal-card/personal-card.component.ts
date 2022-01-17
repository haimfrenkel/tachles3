import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/types&Languages/users/userType';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {
  id:number;
  // user={userName: "uriel shalom"}
  user :User=
    {
      "userName": "dov ber kenig",
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
                  "whatsapp": true,
                  "id": 26
              }
          ],
          "jobs": [
              {
                  "address": {
                      "state": "aa",
                      "city": "aa",
                      "street": "arav ",
                      "buildingNumber": 0,
                      "apartment": 0,
                      "zipCode": 0,
                      "id": 20
                  },
                  "companyName": "",
                  "job": "Renovations contractor",
                  "id": 13
              },
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
        "id": 13,
        "dob": "01/01/1970"
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
          "grandfatherName": "avraham2",
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
          "dob": "26/05/1972"
      },
      "role": "null",
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
      "dateOfMarriage": "02/05/2001",
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
              "dob": "03/06/2013",
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
              "dob": "01/01/2010",
              "id": 12
          }
      ],
      "shtibel": "mekor hanhal",
      "id": 7
  }



ngOnInit(): void {
    console.log("this.id: ",this.id);
    console.log(this.user);
    
  }
  
}
