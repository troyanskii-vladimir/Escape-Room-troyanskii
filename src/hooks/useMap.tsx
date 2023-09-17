import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Map, TileLayer, tileLayer } from 'leaflet';

import { TILE_LAYER, COPYRIGHT } from '../config';
import { Nullable } from 'vitest';


function useMap(
  mapRef: MutableRefObject<Nullable<HTMLElement>>,
): Nullable<Map> {
  const [map, setMap] = useState<Nullable<Map>>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: 59,
          lng: 59,
        },
        zoom: 5,
      });

      const layer = new TileLayer(
        TILE_LAYER,
        {
          attribution: COPYRIGHT,
        },
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export default useMap;
