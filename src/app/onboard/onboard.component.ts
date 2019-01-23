import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'


@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {
  name = new FormControl('')
  form: FormGroup
  email = 'email'
  fieldValue = ''

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      [this.email]: new FormControl(this.fieldValue)
    })
  }

}


// class onSubmit {
//   const email = this.form.value.email

//   this.httpClient
//     .post(this.apiURL, {
//       email: this.form.value.email
//     })
//     .subscribe((x: any) => {}, err => console.log(err))
// }