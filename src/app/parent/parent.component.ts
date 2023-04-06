import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  ProductList:any;
  @ViewChild(ChildComponent) child:ChildComponent | undefined;  
  getData:boolean=false;

  constructor() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.child?.sayWelcome();
  }
  ShowData(){
    this.getData = true;
  }

}
