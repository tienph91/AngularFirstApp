import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products = products;
  product;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[Number(params.get('productId'))];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(this.product);
    window.alert('You\'ve added the product to the cart!!!');
  }

}
