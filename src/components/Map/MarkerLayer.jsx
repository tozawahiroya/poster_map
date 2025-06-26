import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';

const getMarkerColor = (status) => {
  switch (status) {
    case 'pending': return '#808080'; // 未実施：灰色
    case 'completed': return '#0066cc'; // 貼り付け済み：青
    case 'damaged': return '#cc0000'; // 破損：赤
    default: return '#808080';
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 'pending': return '未実施';
    case 'completed': return '貼り付け済み';
    case 'damaged': return '破損';
    default: return '不明';
  }
};

export const MarkerLayer = ({ markers }) => {
  return (
    <>
      {markers.map((marker) => (
        <CircleMarker
          key={marker.id}
          center={[marker.lat, marker.lng]}
          radius={8}
          pathOptions={{
            color: getMarkerColor(marker.status),
            fillColor: getMarkerColor(marker.status),
            fillOpacity: 0.8,
            weight: 2
          }}
          eventHandlers={{
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            }
          }}
        >
          <Popup closeButton={false} autoClose={false} closeOnClick={false}>
            <div style={{ minWidth: '200px' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>
                {marker.name}
              </h4>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                <strong>ステータス:</strong> 
                <span style={{ 
                  color: getMarkerColor(marker.status), 
                  fontWeight: 'bold',
                  marginLeft: '4px'
                }}>
                  {getStatusText(marker.status)}
                </span>
              </p>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                <strong>住所:</strong> {marker.address}
              </p>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                <strong>備考:</strong> {marker.note}
              </p>
              <p style={{ margin: '4px 0', fontSize: '11px', color: '#666' }}>
                座標: {marker.lat.toFixed(4)}, {marker.lng.toFixed(4)}
              </p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </>
  );
};
