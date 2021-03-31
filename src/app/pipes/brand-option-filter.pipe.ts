import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandOptionFilter'
})
export class BrandOptionFilterPipe implements PipeTransform {

  transform(value: Brand, filterNumber:number): unknown {
    return null;
  }

}
