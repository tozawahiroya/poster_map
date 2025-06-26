import React, { useState } from 'react';
import { BaseMap } from './Map/BaseMap';
import { LayerControl } from './Map/LayerControl';
import { ProgressControl } from './Map/ProgressControl';
import { MarkerLayer } from './Map/MarkerLayer';
import { TILE_LAYERS } from '../utils/mapConfig';
import { sampleProgressData, sampleMarkers } from '../data/sampleData';

export const BoardMap = () => {
  const [currentLayer, setCurrentLayer] = useState('osm');

  return (
    <div className="board-map">
      <BaseMap tileLayer={currentLayer}>
        <MarkerLayer markers={sampleMarkers} />
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
