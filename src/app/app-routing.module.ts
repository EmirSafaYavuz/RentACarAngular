import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CategoryComponent } from './components/category/category.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:RentalComponent},
  {path:"Car", component:CarComponent},
  {path:"Car/Brand/:BrandId", component:CarComponent},
  {path:"Car/Color/:ColorId", component:CarComponent},
  {path:"Car/Detail/:CarId", component:CardetailComponent},
  {path:"Brand", component:BrandComponent},
  {path:"Color", component:ColorComponent},
  {path:"Categories", component:CategoryComponent},
  {path:"Customer", component:CustomerComponent},
  {path:"Rental", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
