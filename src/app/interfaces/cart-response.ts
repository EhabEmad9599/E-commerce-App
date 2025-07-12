import { CartResponseData } from "./cart-response-data";

export interface CartResponse {
  cardId: string,
  data: CartResponseData,
  numOfCardItem:number,
  status:string,
}
