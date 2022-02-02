import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslatePipe } from './languages/translate.pipe';

// export function setupTranslateServiceFactory(
//   service: TranslateService): Function {
// return () => service.use('he');
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
