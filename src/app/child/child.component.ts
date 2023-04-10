import { Component, EventEmitter, Output } from '@angular/core';
import { DiscountOffers, IProduct } from '../SharedClasses/Interfaces';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() childEvent = new EventEmitter();

  ProductList: IProduct[] =
    [
      {
        ID: 1,
        Name: "HP",
        Quantity: 3,
        Price: 100,
        Img: "../../assets/imgs/unnamed (4).png",
        Discount: DiscountOffers['No Discount'],
        IsDiscount: true,
        IsPurchased: false
      },
      {
        ID: 2,
        Name: "Dell",
        Quantity: 5,
        Price: 200,
        Img: "../../assets/imgs/unnamed (7).png",
        Discount: DiscountOffers['No Discount'],
        IsDiscount: true,
        IsPurchased: false
      },
      {
        ID: 3,
        Name: "Samsung",
        Quantity: 7,
        Price: 300,
        Img: "../../assets/imgs/unnamed (16).png",
        Discount: DiscountOffers['15%'],
        IsDiscount: true,
        IsPurchased: false
      },
      {
        ID: 4,
        Name: "Lenovo",
        Quantity: 9,
        Price: 500,
        Img: "../../assets/imgs/unnamed (17).png",
        Discount: DiscountOffers['10%'],
        IsDiscount: true,
        IsPurchased: false
      }
    ];

  sendData() {
    this.childEvent.emit(this.ProductList)
  }
  sayWelcome() {
    console.log("Welcome");
  }
}
