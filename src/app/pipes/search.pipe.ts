import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchPipe implements PipeTransform {

  transform(list: Product[], term:string = '') {
    // Filter function
    return list.filter((product) => { return product.title.toLowerCase().includes(term.toLowerCase())});
  }

}
