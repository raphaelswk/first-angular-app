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
import { AboutComponent } from './institutional/about/about.component';
import { ContactComponent } from './institutional/contact/contact.component';
import { AppRoutingModule } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products/products.service';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { RegisterComponent } from './demos/reactiveForms/register/register.component';
import { NavigationModule } from './navigation/navigation.module';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';
import { MoviesComponent } from './demos/pipes/movies/movies.component';
import { FileSizePipe } from './demos/pipes/movies/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/movies/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { Provider } from '@angular/compiler/src/core';

export const BAR_PROVIDER: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    ListProductsComponent,
    RegisterComponent,
    MoviesComponent,
    FileSizePipe,
    ImageFormaterPipe,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    HttpClientModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      branchId: 100,
      branchToken: 'xad9s87vd0asf9v87adva'
    })
  ],
  providers: [
    ProductService,
    AuthGuard,
    RegisterGuard,
    // BAR_PROVIDER,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
