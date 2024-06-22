import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Packages } from '../chat/PackageModel';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl = 'http://localhost:4242';

  constructor(private http: HttpClient) { }

  getResponse(post: any): Observable<any> {
    return this.http.post<Packages>(`${this.apiUrl}/ai`, post);
  }
}
