import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../SharedClasses/Interfaces';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() childEvent = new EventEmitter();

  ProductList:IProduct []= 
  [
    {
      ID: 1,
      Name: "HP",
      Quantity: 3,
      Price: 100,
      Img: "../../assets/imgs/unnamed (4).png"
    },
    {
      ID: 2,
      Name: "Dell",
      Quantity: 5,
      Price: 200,
      Img: "../../assets/imgs/unnamed (7).png"
    },
    {
      ID: 3,
      Name: "Samsung",
      Quantity: 7,
      Price: 300,
      Img: "../../assets/imgs/unnamed (16).png"
    },
    {
      ID: 4,
      Name: "Lenovo",
      Quantity: 9,
      Price: 500,
      Img: "../../assets/imgs/unnamed (17).png"
    }
];

sendData(){
  this.childEvent.emit(this.ProductList)
}
sayWelcome(){
  console.log("Welcome");
}
}
