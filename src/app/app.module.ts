import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductbyidComponent } from './pages/product/productbyid/productbyid.component';
import { CategorybyidComponent } from './pages/category/categorybyid/categorybyid.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CategoriesComponent, HomeComponent, CategoryComponent, ProductComponent, NotfoundComponent, ProductbyidComponent, CategorybyidComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
