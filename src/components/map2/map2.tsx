import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { Icon, layerGroup, Marker } from 'leaflet';

import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../config';
import { Booking } from '../../types/booking';
import useMap from '../../hooks/useMap';


type MapProps = {
  points: Booking[];
  // selectedPointId: string;
}

const getIcon = (icon: string) => new Icon({
  iconUrl: icon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({points}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const latLngs: [number, number][] = [];

  useEffect(() => {
    if (map) {
      const currentMarkerIcon = getIcon(URL_MARKER_ACTIVE);
      const defaultMarkerIcon = getIcon(URL_MARKER_DEFAULT);

      const markerLayer = layerGroup().addTo(map);
      const polylineLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.coords[0],
          lng: point.location.coords[1],
        });

        marker.setIcon(defaultMarkerIcon).addTo(markerLayer);

        latLngs.push([point.location.coords[0], point.location.coords[1]]);
      })

      const polyline = L.polyline(latLngs).addTo(polylineLayer);
      map.fitBounds(polyline.getBounds(), {maxZoom: 20});
      polylineLayer.clearLayers();

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);



  return (
    <div className="map__container" ref={mapRef} />
  );
}

export default Map;
