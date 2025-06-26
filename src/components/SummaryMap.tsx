import React, { useState } from 'react';
import { BaseMap } from './Map/BaseMap';
import { LayerControl } from './Map/LayerControl';
import { TILE_LAYERS } from '../utils/mapConfig';

export const SummaryMap: React.FC = () => {
  const [currentLayer, setCurrentLayer] = useState<keyof typeof TILE_LAYERS>('osm');

  return (
    <div className="summary-map">
      <BaseMap tileLayer={currentLayer}>
      </BaseMap>
      
      <LayerControl
        currentLayer={currentLayer}
        onLayerChange={setCurrentLayer}
      />
      
      <div className="summary-legend">
        <div className="legend-title">進捗率</div>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ff0000' }}></div>
            <span>0-20%</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ff8000' }}></div>
            <span>21-40%</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ffff00' }}></div>
            <span>41-60%</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#80ff00' }}></div>
            <span>61-80%</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#00ff00' }}></div>
            <span>81-100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
