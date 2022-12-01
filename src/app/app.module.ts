import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import {NgMaterialModule} from "./ng-material/ng-material.module";
import {ClienteModule} from "./cliente/cliente.module";
import { PipesModule } from './shared/pipes/pipes.module';
import {FirestoreModule} from "./firestore/firestore.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClienteModule,
    FirestoreModule,
    LayoutModule,
    NgMaterialModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
