import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { TooltipModule } from '../../../theme/directives/tooltip/tooltip.module';
import { ErrorComponent } from './error';
import { ForgotPasswordComponent } from './forgot-password';
import { LoginComponent } from './login';
import { PagesRoutingModule } from './pages-routing.module';
import { SignUpComponent } from './sign-up';
import { MaterialAngularSelectModule } from 'material-angular-select'; // Importado para usarse en sign-up components
                                                                      // Copiado de forms.module.ts Agregado para lista desplegable Estudiante Administrador
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    MaterialAngularSelectModule, // Importado para usarse en sign-up components
  ],
  declarations: [
    ErrorComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
})
export class PagesModule { }
