import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Packages } from '../chat/PackageModel';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl = 'https://dgkyd3u3sv45lg2-api.graycoast-4c16b4a2.eastus.azurecontainerapps.io';

  constructor(private http: HttpClient) { }

  getResponse(post: any): Observable<any> {
    return this.http.post<Packages>(`${this.apiUrl}/ai`, post);
  }
}
