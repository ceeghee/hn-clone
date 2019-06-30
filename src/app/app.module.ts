import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { TopstoriesComponent } from './topstories/topstories.component';
import { FooterComponent } from './footer/footer.component';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopstoriesComponent,
    ItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
