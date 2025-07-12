import { Product } from './product';

export interface CartResponseProduct {
  _id:string,
  count:number,
  price:number,
  product:Product
}
