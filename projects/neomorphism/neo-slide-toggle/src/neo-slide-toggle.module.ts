
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoSlideToggle } from './neo-slide-toggle/neo-slide-toggle.component';

@NgModule({
  declarations: [NeoSlideToggle],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [NeoSlideToggle],
})
export class NeoSlideToggleModule {}
