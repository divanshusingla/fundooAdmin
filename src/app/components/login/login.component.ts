import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import {AuthService} from '../../services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;
    constructor(public router: Router,private auth: AuthService) { }

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
      success: (response) => {
        console.log(response);
        localStorage.setItem('id',response.id);
        this.auth.sendToken(response.id);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log('Error in Operation', error);
      }
    });
  }

}
