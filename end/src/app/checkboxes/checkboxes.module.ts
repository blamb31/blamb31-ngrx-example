import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checkbox1Component } from './checkbox1/checkbox1.component';
import { RouterModule, Routes } from '@angular/router';

const checkboxRoutes:Routes = [
  {
    path: '',
    component: Checkbox1Component
  }
]

@NgModule({
  declarations: [
    Checkbox1Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(checkboxRoutes)
  ]
})
export class CheckboxesModule { }
