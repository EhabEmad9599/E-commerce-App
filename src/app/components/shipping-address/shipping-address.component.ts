import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.css'
})
export class ShippingAddressComponent {

  constructor(private orderService:OrderService, private router: Router, private cartService:CartService) { }

  @Input() id!: string;
  @Input() type!: string;

  shippingAddress = new FormGroup({
    details: new FormControl("", Validators.required),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl("", Validators.required),
  })

    redirectUserToPaymentPage(url:string) {
    window.location.href = url;
  }

  onlinePayment() {
    if(this.type == 'cash') {
      this.orderService.cashOrder(this.shippingAddress.value, this.id).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/allorders']);
        this.cartService.getUpdatedCartItemsNumber()
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/cart'])
      }
      })


    } else if(this.type == 'card') {
          this.orderService.checkoutSession(this.shippingAddress.value, this.id ).subscribe({
      next: (response) => {
        console.log(response);
        this.redirectUserToPaymentPage(response.session.url)
      },
      error: (error) => {
        console.log(error);
        
      }
    })
    }
  }



}
