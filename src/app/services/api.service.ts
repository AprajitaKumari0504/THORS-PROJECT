import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllComponents() {
    return this.http.get<any>(`${environment.baseUrl}/components`)
  }

  // getAWidget(id:any){
  //   return this.http.get<any>(`${environment.baseUrl}/widgets/id`,id{
  // }

  CreateWidget(data:any){
    return this.http.post<any>(`${environment.baseUrl}/widgets`, data)

  }

  getAllWidgets(){
    return this.http.get<any>(`${environment.baseUrl}/widgets`)
  }


  UpdateWidget(id:any) {
    return this.http.put<any>(`${environment.baseUrl}/widgets/id`, id)
  }


}
