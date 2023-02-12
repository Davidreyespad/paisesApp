import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
{
  path: '', //cuando ponemos la URL del proyecto solamente
  component: PorPaisComponent,
  pathMatch: 'full'
},
{
  path: 'region',
  component: PorRegionComponent
},
{
  path: 'capital',
  component: PorCapitalComponent
},
{
  path: 'pais/:id',
  component: VerPaisComponent
},
{
  path: '**', //está al final por si ninguna de las anteriores se da.
  redirectTo: ''
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
