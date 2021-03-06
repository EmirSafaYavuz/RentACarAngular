import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44356/api/brands/getall"

  constructor(private HttpClient : HttpClient) { }

  getBrands() : Observable<ListResponseModel<Brand>>{
    return this.HttpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}
