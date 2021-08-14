import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';


const routes: Routes = [
 {path: '', component: HomeComponent}, // se utiliza solo para la página principal, 1 vez
 {path: 'home', component: HomeComponent},
 {path: 'category', component: CategoryComponent}, //más utilizado, tienen una url especifica. Utilizado n cantidad // para cuando no existen segmentos url. 1 vez
 {path: 'products', component: ProductsComponent}, //m ás utilizada
 {path: 'register', component: RegisterComponent},
 {path: 'login', component: LoginComponent},
 {path: 'user/userSettings', component: UserSettingsComponent},
 {path: '**', component: NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
