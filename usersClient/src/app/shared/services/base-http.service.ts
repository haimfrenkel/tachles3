import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T>{

  constructor(private http: HttpClient) { }

  private getAll(eninty: string, queryParmas = ""): Observable<T[]> {
    return this.http.get<T[]>(`${environment.baseUrl}/${eninty}${queryParmas}`);
  }
  //To return information that the information was successfully received, the type is any, 
  //and the server will return a message that the information was successfully received
  private create(eninty: string, queryParmas = "", body: T): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/${eninty}${queryParmas}`, body);
  }

  private getOneByID(eninty: string, queryParmas = "", id: number): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}/${eninty}/${id}${queryParmas}`);
  }

  private deleteOne(eninty: string, queryParmas = "", id: number): Observable<T[]> {
    return this.http.get<T[]>(`${environment.baseUrl}/${eninty}/${id}${queryParmas}`);
  }
  //same note as create
  private updateOne(eninty: string, queryParmas = "", id: number, body: {}): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/${eninty}/${id}${queryParmas}`);
  }

}
