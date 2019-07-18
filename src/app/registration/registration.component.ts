import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  user = '';
  name = '';
  password = '';
  repeatPassword = '';

  isProfessor;
  isAdmin;

  notUser = true;
  notPassword = true;
  notName = true;

  rolUndefined = true;

  passDontMatch = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    console.log(this.password);
    this.notUser = true;
    this.notPassword = true;
    this.rolUndefined = true;
    this.passDontMatch = true;
    this.notName = true;

    if ((this.user === undefined) || (this.user === '')) {
      this.notUser = false;
    } else if ((this.name === undefined) || (this.name === '')) {
      this.notName = false;

    } else if ((this.password === undefined) || (this.password === '')) {

      this.notPassword = false;

    } else if (this.password !== this.repeatPassword) {

      this.passDontMatch = false;

    } else if ((this.isProfessor === undefined) && (this.isAdmin === undefined)){

      this.rolUndefined = false;
    }



  }

}
