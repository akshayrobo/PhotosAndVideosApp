import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContentTabsComponent } from './components/content-tabs/content-tabs.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorsService } from './core/interceptor/http-interceptors.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpsService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentTabsComponent,
    GridLayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorsService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
