import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { ContactComponent } from './contact/contact.component';
import { PurchaseComponent } from './browse/purchase/purchase.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentsComponent } from './contents/contents.component';

import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    ContactComponent,
    PurchaseComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    SidebarComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
