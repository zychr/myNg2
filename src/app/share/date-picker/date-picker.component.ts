import { Component, OnInit } from '@angular/core';

declare let laydate;
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    laydate.render({ 
  	  elem: '#test',
	  });
  }
  search(v){
    console.log(v)
  }
}
