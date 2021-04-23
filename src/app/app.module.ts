import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { HomeComponent } from './navigation/home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './institutional/about/about.component';
import { ContactComponent } from './institutional/contact/contact.component';
import { RouterModule } from '@angular/router';
import { rootRouteConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products/products.service';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { RegisterComponent } from './demos/reactiveForms/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    ListProductsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    [RouterModule.forRoot(rootRouteConfig, { useHash: false })]
  ],
  providers: [
    ProductService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
