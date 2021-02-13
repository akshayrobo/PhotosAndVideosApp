import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { createClient } from 'pexels';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { bannerImgUrl, photoBaseUrl,  videoBaseUrl } from '../core/config/constants';
import { createClient } from 'pexels';


@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': environment.apiKey as string
    })
  }
  // client: any = createClient(environment.apiKey);
  // query = 'Nature';

  constructor(private http: HttpClient) {
  }


  getdata(search, perPage): Observable<any> {
    const url = photoBaseUrl + "search?query=" + search + "&per_page=" + perPage;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }

  searchPhoto(search, perPage): Observable<any> {
    const url = photoBaseUrl + "search?query=" + search + "&per_page=" + perPage;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }

  searchVideo(search, perPage): Observable<any> {
    const url = videoBaseUrl + "search?query=" + search + "&per_page=" + perPage;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }

  // client.


}
