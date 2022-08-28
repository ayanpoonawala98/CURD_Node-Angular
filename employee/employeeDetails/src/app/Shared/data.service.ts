import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/IEmployee'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url : string = 'http://localhost:3000/employee'
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }

  getEmployeeById(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.url + '/edit/' + id)
  }

  deleteEmployees(id: string): Observable<IEmployee> {
    console.log(this.url + "/" + id)
    return this.http.delete<IEmployee>(this.url + "/" + id)
  }
  

  postEmployeeById(employee: IEmployee): Observable<IEmployee> {
    console.log("------------------->YO ",employee._id)
    return this.http.post<IEmployee>(this.url + "/edit/" +employee._id, employee)
  }

  postEmployees(employee: IEmployee): Observable<IEmployee> {
    console.log(employee)
    return this.http.post<IEmployee>(this.url+'/add',employee)
  }

  

  


}
