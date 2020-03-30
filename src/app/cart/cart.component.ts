import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products;
  checkoutForm;

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder, ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.log('Your order has been submitted', customerData);
    console.log('Your order has been submitted', this.checkoutForm.value);

    this.products = this.cartService.clearCart();
    this.checkoutForm.reset();

  }
}
