import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './productList.component.html', 
  styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle ='Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = "";
  sub: Subscription | undefined;
  
  private _listFilter: string = '';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value
    console.log('In setter', value)
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

   products: IProduct[]=[]
    

  // Injecting Product Service here
  constructor(private productService: ProductService){}


  performFilter(filterBy: string): IProduct[]{
    filterBy= filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLowerCase().includes(filterBy))

  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products; 
      },
      error: err => this.errorMessage = err
    });
    
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  onRatingClicked(message:string):void{
    this.pageTitle= 'Product List: '+ message
  }
}