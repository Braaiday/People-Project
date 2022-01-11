import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44331/api"




  constructor(private http:HttpClient) { }

  getPeopleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/people');
  }

  getPerson(val:any){
    return this.http.get<any>(this.APIUrl+'/people/' + val, val);
  }

  addPerson(val:any){
    return this.http.post<any>(this.APIUrl+'/people', val);
  }

  updatePerson(val:any){
    return this.http.put<any>(this.APIUrl+'/people', val);
  }

  deletePerson(val:any){
    return this.http.delete<any>(this.APIUrl+'/people/' + val, val);
  }

}
