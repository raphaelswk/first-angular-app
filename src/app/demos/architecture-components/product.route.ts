import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { ProductAppComponent } from "./product.app.component";

const productRouterConfig: Routes = [
    { path: '', 
      component: ProductAppComponent,
      children: [
        { path: '', component: ProductDashboardComponent },
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