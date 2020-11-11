import { NgModule } from '@angular/core';
import { FiltroCompletadaPipe } from './filtro-completada.pipe';




@NgModule({
  declarations: [FiltroCompletadaPipe],
  exports: [FiltroCompletadaPipe]
})
export class PipesModule { }
