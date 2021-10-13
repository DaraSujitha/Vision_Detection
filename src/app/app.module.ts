import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { httpInterceptorProviders } from './http-inteceptors';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    ReactiveFormsModule, FormsModule, MaterialModule, HttpClientModule
  ],

  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
