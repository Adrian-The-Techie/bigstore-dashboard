import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient, private _config: ConfigService) {}

  request(data: any): Observable<any> {
    return this._http.post<any>(this._config.uri, data);
  }
  upload(data: any): Observable<any> {
    return this._http.post<any>(`${this._config.uri}`, data);
  }
  export(data: any): Observable<string> {
    return this._http.post(`${this._config.uri}`, data, {
      responseType: 'text',
    });
  }
}
