import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { Image } from 'src/app/models/image';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  brands:Brand[] = [];
  colors:Color[] = [];
  image:Image[] = [];
  dataLoaded = false;
  imageLoaded = false;
  imageBasePath = environment.baseUrl;
  filterText = "";
  colorIdFilter:number = 0
  brandIdFilter:number = 0

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private imageService:ImageService,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.brandIdFilter = params["brandId"];
      this.colorIdFilter = params["colorId"];

      console.log(this.brandIdFilter)
      console.log(this.colorIdFilter)

      if(params["colorId"] == null && params["brandId"] == null){
        this.getCars();
        this.getBrands();
        this.getColors();
        this.brandIdFilter = 0;
        this.colorIdFilter = 0;
      }else if(params["colorId"] == 0 && params["brandId"] == 0){
        this.getCars();
        this.getBrands();
        this.getColors();
      }else if(params["colorId"] == 0 && params["brandId"] != 0){
        this.getCarsByBrandId(params["brandId"]);
        this.getColors();
        this.getBrands();
      }else if(params["colorId"] != 0 && params["brandId"] == 0){
        this.getCarsByColorId(params["colorId"]);
        this.getColors();
        this.getBrands();
      }
      else if(params["colorId"] != 0 && params["brandId"] != 0){
        this.getCarsByColorIdAndBrandId(params["colorId"],params["brandId"])
        this.getColors();
        this.getBrands();
      }
    })
  }

  getDefaultSelectBrand(){
    if(this.brandIdFilter == undefined || this.brandIdFilter == 0){
      return true;
    }else{
      return false;
    }
  }

  getDefaultSelectColor(){
    if(this.colorIdFilter == undefined || this.colorIdFilter == 0){
      return true;
    }else{
      return false;
    }
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByColorIdAndBrandId(colorId:number, brandId:number){
      this.carService.getCarsByColorIdAndBrandId(colorId,brandId).subscribe(response => {
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

  getBrands(){
    this.brandService.getBrands().subscribe(response=> {
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=> {
      this.colors = response.data
    })
  }
}
