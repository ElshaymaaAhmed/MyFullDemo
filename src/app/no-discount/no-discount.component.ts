import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../SharedClasses/Interfaces';

@Component({
  selector: 'app-no-discount',
  templateUrl: './no-discount.component.html',
  styleUrls: ['./no-discount.component.scss']
})
export class NoDiscountComponent {

  ProductList:any = this.productService.GetNonDiscountedProducts();
  constructor(private productService:ProductServiceService){}

}
