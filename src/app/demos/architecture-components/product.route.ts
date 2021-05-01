import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { ProductAppComponent } from "./product.app.component";
import { ProductsResolve } from "./services/products.resolve";

const productRouterConfig: Routes = [
    { path: '', 
      component: ProductAppComponent,
      children: [
        { path: '', redirectTo: 'all' },
        {
          path: ':status', 
          component: ProductDashboardComponent,
          resolve: {
            products: ProductsResolve
          },
          data: {
            test: 'my information'
          }
        },
        { path: 'edit/:id', component: EditProductComponent }
      ]    
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }