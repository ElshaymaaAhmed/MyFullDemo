import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFullDemo';
  
  @ViewChild(ProductComponent) child:ProductComponent | undefined;
  
  DisplayData(): void {
    
    this.child?.renderValues();
  }
}
