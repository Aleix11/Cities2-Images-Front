import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent, PizzaPartyComponent} from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatInputModule, MatSelectModule, MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PizzaPartyComponent
  ],
  entryComponents: [
    AppComponent,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
