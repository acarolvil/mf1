import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent as DeleteEvento } from '../contrato-evento/delete/delete.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: '', component: FormComponent },
  { path: ':evento_id', component: FormComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoEventoRoutingModule { }
