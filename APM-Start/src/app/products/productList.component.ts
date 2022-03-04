import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './productList.component.html', 
  styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle ='Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  
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
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products; 
  }

  onRatingClicked(message:string):void{
    this.pageTitle= 'Product List: '+ message
  }
}