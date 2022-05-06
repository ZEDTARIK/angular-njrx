import { AppDataState } from '../../../state/ProductState';
import { DataStateEnum } from 'src/app/state/DataStateEnum';
import { Product } from '../../../models/product';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products$: Observable<AppDataState<Product>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
     this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.productService.getAllProducts()
    .pipe(
      map((data) => {
        return ({
          dataState: DataStateEnum.LOADED,
          data,

        });
      }),
      startWith({
        dataState: DataStateEnum.LOADING
      }),
      catchError(error => of({
        dataState: DataStateEnum.ERROR,
        errorMessage: error.message
      }))
    );
  }

  // tslint:disable-next-line:typedef
  onDeleted(id: number) {
      this.productService.deleteProduct(id)
        .subscribe(() =>
        this.getProducts()
        );
  }
}
