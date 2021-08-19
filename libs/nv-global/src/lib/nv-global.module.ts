import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import  ButtonComponent  from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    ButtonComponent,
    CheckboxComponent
  ],
})
export class NvGlobalModule {}
