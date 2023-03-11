import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacFormComponent } from './contac-form/contac-form.component';

const routes: Routes = [
{
  path:'',
  component: ContacFormComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
