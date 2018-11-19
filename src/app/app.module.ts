import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar.component';
import { FooterComponent } from './home/footer.component';
import { BillComponent } from './home/bill/bill.component';
import { ItemComponent } from './home/item/item.component';
import { AddItemComponent } from './home/item/add-item/add-item.component';
import { AddStockComponent } from './home/item/add-stock/add-stock.component';
import { ItemListComponent } from './home/bill/item-list/item-list.component';
import { appRouting } from './shared/app.routing';


import { AuthGuard } from './guards/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BillComponent,
    ItemComponent,
    AddItemComponent,
    AddStockComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    appRouting,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
