import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
  getWeather(location){
      return this.http.get(
          'http://api.weatherstack.com/forecast?access_key=5ea9f4f61b84baea301fc71bdf88e20c&query=' + location
      );
  }
}