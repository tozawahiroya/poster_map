import React, { useState } from 'react';
import { BaseMap } from './Map/BaseMap';
import { LayerControl } from './Map/LayerControl';
import { ProgressControl } from './Map/ProgressControl';
import { TILE_LAYERS } from '../utils/mapConfig';
import { sampleProgressData } from '../data/sampleData';

export const BoardMap = () => {
  const [currentLayer, setCurrentLayer] = useState('osm');

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
