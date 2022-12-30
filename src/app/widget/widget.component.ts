import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  datas:any;
  widgetForm: any;

  constructor(private api:ApiService,private fb:FormBuilder) { 

    this.widgetForm = this.fb.group({
      firstname:new FormControl('',Validators.required),
      customer_code:new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
    this.getWidget();
  }

  getWidget(){
    this.api.getAllWidgets().subscribe((res: any)=>{
      this.datas=res;      
  })
  }

  addWidget(){

  }

  Submit(){
    
  }

}
