import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44356/api/cars/"

  constructor(private HttpClient : HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getcardetails"
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColorIdAndBrandId(colorId:number, brandId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getallbycoloridandbrandid?colorId=" + colorId + "&brandId=" + brandId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarByCarId(carId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getcardetailsbyid?id=" + carId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColorId(colorId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getallbycolorid?id=" + colorId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrandId(brandId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getallbybrandid?id=" +brandId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }

  // getCarDetailsByCarId(carId:number) : Observable<ListResponseModel<Car>>{
  //   //let newPath = this.apiUrl + getCarDetails
  // }

}
