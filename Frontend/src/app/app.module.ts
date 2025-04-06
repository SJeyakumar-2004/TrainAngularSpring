import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './user/first/first.component';
import { HomeComponent } from './user/home/home.component';
import { CreateComponent } from './user/create/create.component';
import { CreatesComponent } from './user/creates/creates.component';
import { EditComponent } from './user/edit/edit.component';
import { DeleteComponent } from './user/delete/delete.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { HomesComponent } from './user/homes/homes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EdittrainComponent } from './user/edittrain/edittrain.component'; 


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    CreateComponent,
    CreatesComponent,
    EditComponent,
    DeleteComponent,
    HomesComponent,
    EdittrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
