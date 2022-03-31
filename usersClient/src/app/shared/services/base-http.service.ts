import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T>{

  constructor(protected http: HttpClient) { }


  public get(eninty: string, queryParmas = ""){
    return this.getAll(eninty)
  }

  protected getAll(eninty: string, queryParmas = ""): Observable<T[]> {
    return this.http.get<T[]>(`${environment.baseUrl}/${eninty}${queryParmas}`);
  }
  //To return information that the information was successfully received, the type is any, 
  //and the server will return a message that the information was successfully received
  protected create(eninty: string, queryParmas = "", body: T | any, headers?: any): Observable<any> {    
    return this.http.post<any>(`${environment.baseUrl}/${eninty}${queryParmas}`, body);
  }

  protected getOneByID(eninty: string, queryParmas = "", id: number): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}/${eninty}/${id}${queryParmas}`);
  }

  protected deleteOne(eninty: string, queryParmas = "", id: number): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl}/${eninty}/${id}${queryParmas}`);
  }
  //same note as create
  protected updateOne(eninty: string, queryParmas = "", id: number, body: {}): Observable<any> {
    return this.http.put<any>(`${environment.baseUrl}/${eninty}/${id}${queryParmas}`, body);
  }

}