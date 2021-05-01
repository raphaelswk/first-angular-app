import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductCardDetailComponent } from "./components/product-card-detail.component";
import { ProductsCountComponent } from "./components/product-count.component";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { ProductRoutingModule } from "./product.route";
import { ProductService } from "./services/products.service";
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductAppComponent } from "./product.app.component";
import { ProductsResolve } from "./services/products.resolve";

@NgModule({
    declarations: [
        ProductAppComponent,
        ProductDashboardComponent,
        ProductCardDetailComponent,
        ProductsCountComponent,
        EditProductComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    providers: [
        ProductService,
        ProductsResolve
    ]
})
export class ProductModule{}