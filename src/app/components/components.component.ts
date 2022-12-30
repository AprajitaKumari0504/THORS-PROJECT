import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  datas:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getComponents();
  }

  getComponents(){
    this.api.getAllComponents().subscribe((res: any)=>{
      this.datas=res;      
  })
  }

}
