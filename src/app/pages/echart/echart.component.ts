import { Component, OnInit,Output } from '@angular/core';


@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent implements OnInit {

  constructor() { }

    
  ROUTE=[
    {
    	'index':1,
    	'advisor':'iwen',
    	'phone':18910058562,
    	'camp':'北京总部',
    	'work':'教育顾问',
    	'max':124,
    	'ifcheck':true
    },
    {
    	'index':2,
    	'advisor':'jack',
    	'phone':18610148562,
    	'camp':'上海中心',
    	'work':'教育顾问',
    	'max':18,
    	'ifcheck':false
    },
    {
    	'index':3,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':4,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':5,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':6,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':7,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':8,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':9,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':10,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':11,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':12,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':13,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':14,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':15,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':16,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':17,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':18,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':19,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':23,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':24,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':25,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':26,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':27,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':28,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':18,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':19,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':12,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':13,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':14,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':15,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':16,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':17,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':18,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':19,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':12,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':13,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':14,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':15,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':16,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':17,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':18,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':19,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':12,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':13,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':14,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':15,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':16,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':17,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':18,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':19,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':12,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':13,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':14,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':15,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':16,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':17,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':18,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':19,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':12,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':13,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':14,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':15,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':16,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':17,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':18,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':19,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':22,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':20,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':21,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    },
    {
    	'index':58,
    	'advisor':'rose',
    	'phone':13000000000,
    	'camp':'深圳总部',
    	'work':'教育顾问',
    	'max':201,
    	'ifcheck':false
    }
  ];
  ngOnInit() {  
  };  
  
}
