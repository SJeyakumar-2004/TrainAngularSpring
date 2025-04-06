import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './user/first/first.component';
import { HomeComponent } from './user/home/home.component';
import { CreateComponent } from './user/create/create.component';
import { CreatesComponent } from './user/creates/creates.component';
import { DeleteComponent } from './user/delete/delete.component';
import { EditComponent } from './user/edit/edit.component';
import { HomesComponent } from './user/homes/homes.component';
import { EdittrainComponent } from './user/edittrain/edittrain.component';

const routes: Routes = [{path:'first',component:FirstComponent},
  {path:'home',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'creates',component:CreatesComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'delete',component:DeleteComponent},
  {path:'homes',component:HomesComponent},
  {path:'edittrain/:trainNo',component:EdittrainComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
