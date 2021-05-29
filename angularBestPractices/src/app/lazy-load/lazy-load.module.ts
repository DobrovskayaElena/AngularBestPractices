import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadComponent } from '../lazy-load/lazy-load.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyLoadComponent,
      },
    ]),
  ],
  declarations: [LazyLoadComponent],
})
export class LazyModule {}
