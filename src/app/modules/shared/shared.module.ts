import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
  ]
})
export class SharedModule {
}
