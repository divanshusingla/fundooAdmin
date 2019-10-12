import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;
  constructor(public router: Router) { }

  ngOnInit() {
    $('#submitLogin').on('click', function (e) {
      e.preventDefault();
    });
  }

  login() {
    this.data = {
      email: $('#email').val(),
      password: $('#pwd').val(),
    }
    $.ajax({
      url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin',
      type: 'POST',
      dataType: 'json',
      data: this.data,
      success: (reponse) => {
        console.log(reponse);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log('Error in Operation', error);
      }
    });

  }

}
