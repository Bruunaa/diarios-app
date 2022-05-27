import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    // recurso que fazem parte do módulo (componentes. diretivas...)
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }

/* 
O uso do shared se destina a armazenar recursos usados com  frequencia por outras partes da aplicação: pipes, diretivas,
*/
