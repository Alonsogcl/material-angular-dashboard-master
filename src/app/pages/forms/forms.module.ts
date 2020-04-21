import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { MaterialAngularSelectModule } from 'material-angular-select'; // Agregado para lista desplegable Estudiante Administrador

import { ThemeModule } from 'theme';

import { EmployerFormComponent } from './employer-form';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
    MaterialAngularSelectModule, // Agregado para lista desplegable Estudiante Administrador
  ],
  declarations: [
    FormsComponent,
    EmployerFormComponent,
  ],
  providers: [],
})
export class FormsModule { }
