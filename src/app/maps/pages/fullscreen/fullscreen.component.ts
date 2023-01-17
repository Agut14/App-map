import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styles: [
  ]
})
export class FullscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'fullscreen-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -0.035820631592546795 ,40.17577721735052 ],
      zoom: 10
    });
  }

}
