import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44356/api/rentals/getall"

  constructor(private HttpClient : HttpClient) { }

  getRentals() : Observable<ListResponseModel<Rental>>{
    return this.HttpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }
}
