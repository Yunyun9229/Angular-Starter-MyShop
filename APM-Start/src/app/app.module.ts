import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/productList.component';
import { CovertToSpacesPipe } from './shared/covertToSpaces.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent, 
    CovertToSpacesPipe
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
