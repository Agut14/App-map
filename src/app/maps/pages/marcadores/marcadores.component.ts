import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Marker } from '../../../shared/interfaces/marker.interface';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99999;
    }

    li {
      cursor: pointer;
      color: black;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('map') divMapa!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 10;
  centerCoords: [number, number] = [ -0.035820631592546795 ,40.17577721735052 ];

  markers: Marker[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centerCoords,
      zoom: this.zoomLevel
    });

    this.getMarkers();
  }

  addMarker(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const newMarker = new mapboxgl.Marker({
      draggable: true,
      color
    })
    .setLngLat(this.centerCoords)
    .addTo(this.map);

    this.markers.push({
      color,
      marker: newMarker
    });

    this.saveMarkers();
  }

  goTo(marker: Marker){
    this.map.flyTo({
      center: marker.marker!.getLngLat()
    })
  }

  saveMarkers(){

    const coordsArray: Marker[] = [];

    this.markers.forEach( m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      coordsArray.push({
        color: color,
        center: [lng, lat ],
      })
    })

    localStorage.setItem('markers', JSON.stringify(coordsArray));
  }

  getMarkers(){
    
    if(!localStorage.getItem('markers')){
      return;
    }

    const markers: Marker[] = JSON.parse(localStorage.getItem('markers')!);

    markers.map(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
      .setLngLat(m.center!)
      .addTo(this.map);

      this.markers.push({
        marker: newMarker,
        color: m.color
      })
    })

    
  }
}
