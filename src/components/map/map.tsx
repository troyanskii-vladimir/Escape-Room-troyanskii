import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L, { LatLngBoundsExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuestBookingData, getQuestBookingPlaceId } from '../../store/quests-data/quest-data.selectors';
import { changeBookingPlaceId } from '../../store/quests-data/quest-data.slice';

import { COPYRIGHT, TILE_LAYER, URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../config';


function Map(): JSX.Element {
  const disptach = useAppDispatch();

  const polygon: LatLngBoundsExpression = [];

  const places = useAppSelector(getQuestBookingData);
  const selectedId = useAppSelector(getQuestBookingPlaceId);

  const getIcon = (icon: string) => new L.Icon({
    iconUrl: icon,
    iconSize: [23, 42],
    iconAnchor: [12, 42],
  });

  return(
    <MapContainer
      className='map__container'
      bounds={polygon}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution={COPYRIGHT}
        url={TILE_LAYER}
      />
      {
        places.map((place) => {
          polygon.push(place.location.coords as LatLngTuple);
          const markerStyle = (place.id === selectedId) ? getIcon(URL_MARKER_ACTIVE) : getIcon(URL_MARKER_DEFAULT);
          return (
            <Marker
              key={place.id}
              icon={markerStyle}
              position={place.location.coords as LatLngTuple}
              eventHandlers={{
                click: () => {
                  disptach(changeBookingPlaceId(place.id))
                }
              }}
            >
            </Marker>
          );
        })
      }
    </MapContainer>
  );
}

export default Map;
