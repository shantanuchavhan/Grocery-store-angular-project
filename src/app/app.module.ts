import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { RouterModule,Routes} from "@angular/router";

const appRoute:Routes=[
  {path:'grocery',component:GroceryComponent},
  {path:'view',component:ViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
