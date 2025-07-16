import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.css'
})
export class ShippingAddressComponent {

  constructor(private orderService:OrderService) { }

  @Input() id!: string;

  shippingAddress = new FormGroup({
    details: new FormControl("", Validators.required),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl("", Validators.required),
  })

    redirectUserToPaymentPage(url:string) {
    window.location.href = url;
  }

  onlinePayment() {
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
