import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { NeoButtonComponent } from './neo-button/neo-button.component';
import { NeoRippleModule } from '@neomorphism/ng-neomorphism/neo-ripple';

@NgModule({
  declarations: [NeoButtonComponent],
  imports: [CommonModule, MatButtonModule, NeoRippleModule],
  exports: [NeoButtonComponent],
})
export class NeoButtonModule {}
