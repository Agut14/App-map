import * as mapboxgl from 'mapbox-gl';
export interface Marker {
    color: string;
    marker?: mapboxgl.Marker;
    center?: [number, number];
}