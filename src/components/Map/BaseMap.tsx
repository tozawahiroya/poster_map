import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { DEFAULT_MAP_CONFIG, TILE_LAYERS } from '../../utils/mapConfig';
import 'leaflet/dist/leaflet.css';

interface BaseMapProps {
  children?: React.ReactNode;
  center?: [number, number];
  zoom?: number;
  tileLayer?: keyof typeof TILE_LAYERS;
  className?: string;
}

export const BaseMap: React.FC<BaseMapProps> = ({
  children,
  center = DEFAULT_MAP_CONFIG.center,
  zoom = DEFAULT_MAP_CONFIG.zoom,
  tileLayer = 'osm',
  className = 'map-container'
}) => {
  const selectedTileLayer = TILE_LAYERS[tileLayer];

  return (
    <div className={className}>
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={DEFAULT_MAP_CONFIG.minZoom}
        maxZoom={DEFAULT_MAP_CONFIG.maxZoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url={selectedTileLayer.url}
          attribution={selectedTileLayer.attribution}
        />
        {children}
      </MapContainer>
    </div>
  );
};
