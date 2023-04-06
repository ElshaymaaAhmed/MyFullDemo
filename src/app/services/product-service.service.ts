import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../SharedClasses/Interfaces';

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
}
