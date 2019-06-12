import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { InputFormComponent } from './input-form/input-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatCheckboxModule, MatButtonModule, MatTableModule,
  MatSelectModule, MatTreeModule, MatExpansionModule, MatIconModule, MatTabsModule,
  MatGridListModule, MatToolbarModule, MatDividerModule, MatListModule} from '@angular/material';
import { DisplayModule } from './display/display.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatTreeModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    DisplayModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
