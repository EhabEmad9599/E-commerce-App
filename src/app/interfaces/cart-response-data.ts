import { CartResponseProduct } from "./cart-response-product";

export interface CartResponseData {
  _id:string,
  cartOwner:string,
  products:CartResponseProduct[],
  totalCartPrice:number
}
