import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { COPYRIGHT, TILE_LAYER, URL_MARKER_ACTIVE } from '../../config';


type MapStaticProps = {
  coords: number[];
}

function MapStatic({coords}: MapStaticProps): JSX.Element {
  return (
    <MapContainer
      className="map__container"
      center={coords as LatLngTuple}
      zoom={16}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution={COPYRIGHT}
        url={TILE_LAYER}
      />
    <Marker
      position={coords as LatLngTuple}
      icon={new L.Icon({
        iconUrl: URL_MARKER_ACTIVE,
        iconSize: [23, 42],
        iconAnchor: [12, 42],
      })}
    />
    </MapContainer>
  );
}

export default MapStatic;
