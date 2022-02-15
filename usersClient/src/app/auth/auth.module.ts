import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  exports: [
    
  ],
   providers: [ ]
})

export class AuthModule { }
