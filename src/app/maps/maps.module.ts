import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullscreenComponent } from './pages/fullscreen/fullscreen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomrangeComponent } from './pages/zoomrange/zoomrange.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullscreenComponent,
    MarcadoresComponent,
    ZoomrangeComponent,
    PropiedadesComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
