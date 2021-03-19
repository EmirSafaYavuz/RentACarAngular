import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cars:Car[] = [];
  image:Image[] = [];
  dataLoaded = false;
  imageLoaded = false;

  constructor(
    private carService: CarService,
    private imageService:ImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["CarId"]){
        this.getCarDetail(params["CarId"])
        this.getCarImage(params["CarId"])
      }else{

      }
    })
  }

  getCarDetail(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response => {
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
