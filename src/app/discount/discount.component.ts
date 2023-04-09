import { Component } from '@angular/core';
import { IProduct } from '../SharedClasses/Interfaces';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent {

  ProductList:any = this.productService.GetDiscountedProducts();

  constructor(private productService:ProductServiceService){ }

}
