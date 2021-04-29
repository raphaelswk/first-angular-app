import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { RegisterComponent } from "./demos/reactiveForms/register/register.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { HomeComponent } from "./navigation/home/home.component";
import { NotFoundComponent } from "./navigation/not-found/not-found.component";
import { ListProductsComponent } from "./products/list-products/list-products.component";

export const rootRouteConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },    
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'products', component: ListProductsComponent },
    { path: 'product-details/:id', component: ListProductsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products-dashboard', // LAZY LOAD
            loadChildren: () => import('./demos/architecture-components/product.module')
                .then(m => m.ProductModule)
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouteConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}