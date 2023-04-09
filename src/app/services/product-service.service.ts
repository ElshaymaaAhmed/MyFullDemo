import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DiscountOffers, IProduct } from '../SharedClasses/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  _url:string="../assets/Data/ProductsList.json";
  AllProducts:any;

  constructor(private http:HttpClient) { }

  GetAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }))
  }

  GetProductById(prdId: unknown):any{
    this.AllProducts = this.GetAllProducts();

    if(!Number.isNaN(prdId)){

      this.AllProducts.forEach((product: { ID: any; }) => {
        
        if(product.ID === prdId)
          return product;
        
        return null;
      });
    }
    return null;
  }
  DiscountProducts:IProduct[] =
  [
    {
      ID: 3,
      Name: "Samsung",
      Quantity: 7,
      Price: 300,
      Img: "../../assets/imgs/unnamed (16).png",
      Discount: DiscountOffers['15%'],
	    IsDiscount:true,
      IsPurchased:false
    },
    {
      ID: 4,
      Name: "Lenovo",
      Quantity: 9,
      Price: 500,
      Img: "../../assets/imgs/unnamed (17).png",
      Discount: DiscountOffers['10%'],
	    IsDiscount:true,
      IsPurchased:false 
    }
];

noDiscountProducts:IProduct[] = 
  [
    {
      ID: 1,
      Name: "HP",
      Quantity: 3,
      Price: 100,
      Img: "../../assets/imgs/unnamed (4).png",
      Discount: DiscountOffers['No Discount'],
	    IsDiscount:false,
      IsPurchased:false
    },
    {
      ID: 2,
      Name: "Dell",
      Quantity: 5,
      Price: 200,
      Img: "../../assets/imgs/unnamed (7).png",
      Discount: DiscountOffers['No Discount'],
	    IsDiscount:false,
      IsPurchased:false
    }
];

  GetDiscountedProducts(){ 
    return this.DiscountProducts;
  }
 GetNonDiscountedProducts(){

  return this.noDiscountProducts;
 }
}
