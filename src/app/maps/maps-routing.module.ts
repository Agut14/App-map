import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenComponent } from './pages/fullscreen/fullscreen.component';
import { ZoomrangeComponent } from './pages/zoomrange/zoomrange.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'fullscreen', component: FullscreenComponent},
      {path:'zoom-range', component: ZoomrangeComponent},
      {path:'marcadores', component: MarcadoresComponent},
      {path:'propiedades', component: PropiedadesComponent},
      {path:'**', redirectTo: 'fullscreen'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
