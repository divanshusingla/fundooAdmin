import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
data : any ;
  constructor() { }

  ngOnInit() {
    $('#getUserList').on('click',function(e){
      e.preventDefault();
  });
  this.getList();
  }

  


  getList(){
    $(document).ready(function(){
    $.ajax({  
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList',  
    type: 'GET',  
    dataType: 'json',  
    success: function (response) {  
        console.log(response);
        this.data = response.data.data;  
        var usersData = '';
        $.each(this.data, function(key,value){
          usersData += '<tr>';
          usersData += '<td>'+value.firstName+'</td>';
          usersData += '<td>'+value.lastName+'</td>';
          usersData += '<td>'+value.role+'</td>';
          usersData += '<td>'+value.service+'</td>';
          usersData += '</td>'
        });
        $('#userListTable').append(usersData);
    }
}); 
});
}

}
