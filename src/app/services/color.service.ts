import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44356/api/colors/getall"

  constructor(private HttpClient : HttpClient) { }

  getColors() : Observable<ListResponseModel<Color>>{
    return this.HttpClient.get<ListResponseModel<Color>>(this.apiUrl)
  }
}
