import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoomrange',
  templateUrl: './zoomrange.component.html',
  styles: [
    `
    .row {
      background-color: white;
      position: fixed;
      bottom:50px;
      left:30px;
      padding: 10px;
      border-radius: 5px;
      z-index:99999;
      width: 400px;
    }

    `
  ]
})
export class ZoomrangeComponent implements AfterViewInit {

  @ViewChild('map') divMapa!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() { }

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -0.035820631592546795 ,40.17577721735052 ],
      zoom: this.zoomLevel
    });

    this.map.on('zoom', () => {
      this.zoomLevel = this.map.getZoom();
    })

    this.map.on('zoomend', () => {
      this.zoomLevel = this.map.getZoom();
      if(this.map.getZoom() > 18){
        this.map.zoomTo(18);
      }
    })
  }

  public mapZoom(type: string, value?:string){
    switch(type){
      case 'in': 
        this.map.zoomIn();
        break;

      case 'out': 
        this.map.zoomOut();
        break;

      case 'slide':
        this.map.zoomTo(Number(value));
        break;  
    }
  }

}
