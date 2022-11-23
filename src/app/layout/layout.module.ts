import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    NgMaterialModule,
    FormsModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    MenuComponent,
    MatMenuModule
  ]
})
export class LayoutModule { }
