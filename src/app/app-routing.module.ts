import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [

  { path: 'table' , component: TableComponent},
  { path: 'forms' , component: ReactiveFormComponent},
  { path: 'bootstrap' , component: BootstrapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
