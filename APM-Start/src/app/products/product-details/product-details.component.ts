import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product Detail";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`
  }

}
