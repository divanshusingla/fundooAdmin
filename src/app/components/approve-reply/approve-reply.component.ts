import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-approve-reply',
  templateUrl: './approve-reply.component.html',
  styleUrls: ['./approve-reply.component.css']
})
export class ApproveReplyComponent implements OnInit {
  data: any;
  response: any
  constructor() { }

  ngOnInit() {
    this.getUnapprovedAnswersList();
  }

  getUnapprovedAnswersList() {
    $.ajax({
      url: 'http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/getUnApprovedAnswer',
      headers: { Authorization: localStorage.getItem('id') },
      type: 'GET',
      dataType: 'json',
      contentType: "appliaction/json",
      success: (response) => {
        this.data = response.data;
        console.log("questions and answers data is ", response.data);
      }
    })
  }



  approveAnswer(id)
  {
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/approve/' + id,
        headers : { Authorization : localStorage.getItem('id') },
        type: 'POST',
        dataType: 'json',
        contentType : "appliaction/json",
        success: function (response) {
          // this.data = response.data.data;
          this.response = response;
          this.data = this.response;
         console.log("answer is approved ", this.data);
         }
      });
      this.getUnapprovedAnswersList();
  }


  rejectAnswer(id)
  {
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/reject/' + id,
        headers : { Authorization : localStorage.getItem('id') },
        type: 'POST',
        dataType: 'json',
        contentType : "appliaction/json",
        success: function (response) {
          // this.data = response.data.data;
          this.response = response;
          this.data = this.response;
         console.log("answer is rejected", this.data);
        }
      });
      this.getUnapprovedAnswersList();

  }




}
