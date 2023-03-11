import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContacFormComponent } from './contac-form/contac-form.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    ContacFormComponent
  ],
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    ShareModule
  ]
})
export class ContactFormModule { }
