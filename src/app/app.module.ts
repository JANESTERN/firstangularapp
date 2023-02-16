import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { headerComponent } from 'src/header/header.component';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    BodyComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }