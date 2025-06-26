import React, { useState } from 'react';
import { BaseMap } from './Map/BaseMap';
import { LayerControl } from './Map/LayerControl';
import { TILE_LAYERS } from '../utils/mapConfig';

export const VoteMap = () => {
  const [currentLayer, setCurrentLayer] = useState('osm');

  return (
    <div className="vote-map">
      <BaseMap tileLayer={currentLayer}>
      </BaseMap>
      
      <LayerControl
        currentLayer={currentLayer}
        onLayerChange={setCurrentLayer}
      />
      
      <div className="vote-info">
        <div className="vote-title">期日前投票所</div>
        <div className="vote-description">
          期日前投票所の位置を表示します
        </div>
      </div>
    </div>
  );
};
