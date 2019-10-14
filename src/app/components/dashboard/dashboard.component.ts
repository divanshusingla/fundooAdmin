import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../services/authService/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  countBasic : any;
  countAdvance : any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    $('#getUserList').on('click', function (e) {
      e.preventDefault();
    });
    $('#home').on('click', function (e) {
      e.preventDefault();
    });
    $('#advanceUsers').on('click', function (e) {
      e.preventDefault();
    });
    $('#basicUsers').on('click', function (e) {
      e.preventDefault(); 
    });
    this.getList();
  }


  serviceAdvance() {
    $(document).ready(function () {
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          this.data = response.data.data;
          this.data =  $.grep(this.data, function (n, index) {
            return (n["service"] == "advance" || n["service"] == "Advance");
          });
         console.log("advance data is ", this.data);
          var usersData = '';
          usersData  += '<tbody id="completeData">';
          $.each(this.data, function (key, value) {
            usersData += '<tr>';
            usersData += '<td>' + value.firstName + '</td>';
            usersData += '<td>' + value.lastName + '</td>';
            usersData += '<td>' + value.role + '</td>';
            usersData += '<td>' + value.service + '</td>';
            usersData += '</td>'
          });
        usersData += '</tbody>';
        $('table tbody').replaceWith(usersData);
        }
      })
    });
  }


  serviceBasic() {
    $(document).ready(function () {
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          this.data = response.data.data;
          this.data =  $.grep(this.data, function (n, index) {
            return (n["service"] == "basic" || n["service"] == "Basic");
          });
         console.log("basic data is ", this.data);
         var usersData = '';
         usersData  += '<tbody id="completeData">';
         $.each(this.data, function (key, value) {
          usersData += '<tr>';
          usersData += '<td>' + value.firstName + '</td>';
          usersData += '<td>' + value.lastName + '</td>';
          usersData += '<td>' + value.role + '</td>';
          usersData += '<td>' + value.service + '</td>';
          usersData += '</td>'
        });
        usersData += '</tbody>';
        $('table tbody').replaceWith(usersData);
        }
      })
    });
  }

  searchData(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#completeData tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
       return true;
      });
    });
  }



  getList() {
    $(document).ready(function () {
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          this.data = response.data.data;
          console.log("main data is ", this.data);
          var usersData = '';
          usersData  += '<tbody id="completeData">';
          $.each(this.data, function (key, value) {
            usersData += '<tr>';
            usersData += '<td>' + value.firstName + '</td>';
            usersData += '<td>' + value.lastName + '</td>';
            usersData += '<td>' + value.email + '</td>';
            usersData += '<td>' + value.service + '</td>';
            usersData += '</tr>'
          });
          usersData += '</tbody>';
          $('table tbody').replaceWith(usersData);
          $('#advanceData').append(this.countAdvance);
          $('#basicData').append(this.countBasic);
          this.countAdvance=this.data.filter(function (o)
          {
            return o.service ==( "advance") || o.service==( "Advance")
          }).length;
          $('#advanceData').replaceWith(this.countAdvance);

          this.countBasic=this.data.filter(function (o)
          {
            return o.service==( "basic") || o.service==( "Basic")
          }).length;
          $('#basicData').replaceWith(this.countBasic);
        }
      });
    });
  }


  logout()
  {
    this.auth.logout();
  }
}
