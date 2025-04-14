import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductbyidComponent } from './pages/product/productbyid/productbyid.component';
import { CategorybyidComponent } from './pages/category/categorybyid/categorybyid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:categoryId', component: CategorybyidComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:productId', component: ProductbyidComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
