import React from 'react';
import { TILE_LAYERS } from '../../utils/mapConfig';

interface LayerControlProps {
  currentLayer: keyof typeof TILE_LAYERS;
  onLayerChange: (layer: keyof typeof TILE_LAYERS) => void;
}

export const LayerControl: React.FC<LayerControlProps> = ({
  currentLayer,
  onLayerChange
}) => {
  return (
    <div className="layer-control">
      <div className="layer-control-title">地図切替</div>
      <div className="layer-control-buttons">
        {Object.entries(TILE_LAYERS).map(([key, layer]) => (
          <button
            key={key}
            className={`layer-button ${currentLayer === key ? 'active' : ''}`}
            onClick={() => onLayerChange(key as keyof typeof TILE_LAYERS)}
          >
            {layer.name}
          </button>
        ))}
      </div>
    </div>
  );
};
