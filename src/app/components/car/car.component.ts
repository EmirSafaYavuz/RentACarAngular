import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  image:Image[] = [];
  dataLoaded = false;
  imageLoaded = false;
  imageBasePath = environment.baseUrl;
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private imageService:ImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["ColorId"]){
        this.getCarsByColorId(params["ColorId"])
      }else if(params["BrandId"]){
        this.getCarsByBrandId(params["BrandId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarImage(carId:number){
    this.imageService.getImagesByCarId(carId).subscribe(response => {
      this.image = response.data
      this.imageLoaded = true
    })
  }
}
