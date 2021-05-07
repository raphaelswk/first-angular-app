import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./demos/bar-di-zones/bar.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { MoviesComponent } from "./demos/pipes/movies/movies.component";
import { RegisterComponent } from "./demos/reactiveForms/register/register.component";
import { TodoComponent } from "./demos/todo-list/todo.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { HomeComponent } from "./navigation/home/home.component";
import { NotFoundComponent } from "./navigation/not-found/not-found.component";
import { ListProductsComponent } from "./products/list-products/list-products.component";
import { AuthGuard } from "./services/app.guard";
import { RegisterGuard } from "./services/register.guard";

export const rootRouteConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },    
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'products', component: ListProductsComponent },    
    { path: 'product-details/:id', component: ListProductsComponent },
    { path: 'register', component: RegisterComponent, canDeactivate: [RegisterGuard] },
    { path: 'products-dashboard', // LAZY LOADING
            loadChildren: () => import('./demos/architecture-components/product.module')
                .then(m => m.ProductModule)
    },
    { path: 'admin', // LAZY LOADING
            loadChildren: () => import('./admin/admin.module')
                .then(m => m.AdminModule),
            canLoad: [AuthGuard],
            canActivate: [AuthGuard]
    },
    { path: 'movies', component: MoviesComponent },
    { path: 'bar', component: BarComponent },
    { path: 'todo', component: TodoComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouteConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}