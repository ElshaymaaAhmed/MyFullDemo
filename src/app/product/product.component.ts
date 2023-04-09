import { Component } from '@angular/core';
import { DiscountOffers } from '../SharedClasses/Interfaces';
import { IProduct } from '../SharedClasses/Interfaces';
import { ICategory } from '../SharedClasses/Interfaces';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{ 

  constructor(private productService:ProductServiceService, private router:Router, private activeroute:ActivatedRoute) {}

  Discount:DiscountOffers = DiscountOffers['10%']; // 'No Discount'
  StoreName:string = "Electronica Store";
  StoreLogo:string = "../../assets/imgs/NewIcon.png";
  ProductList:any = [];
  errorMessage:any;

  CategoryList:ICategory []= 
  [
    { ID: 1, Name: "Laptops" },
    { ID: 2, Name: "Screens"},
    { ID: 3, Name: "SmartPhones"},
  ];
  ClientName:string = "Shaima Ahmed";
  IsPurshased:boolean = false;

  discount_Offers:string = this.Discount.toString();

  showTable:boolean = true;
  status:string = "Buy";
  Product:any;
  prodID:any;

  hideTable(){
    if(this.showTable == true){
      this.showTable = false;
      this.IsPurshased = true;
      this.status = "Undo";
    }
    else{
      this.showTable = true;
      this.IsPurshased = false;
      this.status = "Buy";
    }
    
  }
  ngOnInit(): void 
  {
    this.productService.GetAllProducts().subscribe({
      next:data=>this.ProductList = data,
      error:error=>this.errorMessage = error
      
    });
  
  }
  renderValues(){
   
    this.productService.GetProductById(this.prodID).subscribe({
      next:(data: any)=> this.Product = data,
      error:(error: any)=>this.errorMessage=error
      
    });
    
  }

  // WithDiscount(){
  //   this.router.navigate(['discount'],{relativeTo:this.activeroute})     
  // }

  // WithoutDiscount(){ 
  //   this.router.navigate(['nodiscount'],{relativeTo:this.activeroute}) 
  // }
}
