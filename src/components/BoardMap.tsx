import React, { useState } from 'react';
import { BaseMap } from './Map/BaseMap';
import { LayerControl } from './Map/LayerControl';
import { ProgressControl } from './Map/ProgressControl';
import { TILE_LAYERS } from '../utils/mapConfig';
import { sampleProgressData } from '../data/sampleData';

export const BoardMap: React.FC = () => {
  const [currentLayer, setCurrentLayer] = useState<keyof typeof TILE_LAYERS>('osm');

  return (
    <div className="board-map">
      <BaseMap tileLayer={currentLayer}>
      </BaseMap>
      
      <LayerControl
        currentLayer={currentLayer}
        onLayerChange={setCurrentLayer}
      />
      
      <ProgressControl
        total={sampleProgressData.total}
        completed={sampleProgressData.completed}
        percentage={sampleProgressData.percentage}
      />
    </div>
  );
};
