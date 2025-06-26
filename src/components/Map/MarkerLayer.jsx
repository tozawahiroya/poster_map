import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';

const GOOGLE_FORM_BASE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSds42PdgLEtLd_XESvBtgSLw5p96ZsfOz13VKL3dZu9AR2DjQ/viewform';
const LOCATION_ENTRY_ID = 'entry.122797054';
const STATUS_ENTRY_ID = 'entry.758649329';

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

const generateGoogleFormURL = (markerName, status) => {
  const statusText = getStatusText(status);
  const params = new URLSearchParams({
    [LOCATION_ENTRY_ID]: markerName,
    [STATUS_ENTRY_ID]: statusText
  });
  return `${GOOGLE_FORM_BASE_URL}?${params.toString()}`;
};

export const MarkerLayer = ({ markers }) => {
  console.log('MarkerLayer rendering with markers:', markers);
  console.log('Markers length:', markers ? markers.length : 'undefined');
  
  if (!markers || markers.length === 0) {
    console.log('No markers to render');
    return null;
  }
  
  return (
    <>
      {markers.map((marker) => {
        console.log('Rendering marker:', marker.id, 'at coordinates:', [marker.lat, marker.lng], 'with status:', marker.status);
        return (
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
                setTimeout(() => {
                  const popup = e.target.getPopup();
                  if (popup && popup.isOpen()) {
                    const popupElement = popup.getElement();
                    if (popupElement) {
                      const handleMouseLeave = () => {
                        e.target.closePopup();
                        popupElement.removeEventListener('mouseleave', handleMouseLeave);
                      };
                      popupElement.addEventListener('mouseleave', handleMouseLeave);
                    }
                  }
                }, 50);
              }
            }}
          >
            <Popup 
              closeButton={false} 
              autoClose={false} 
              closeOnClick={false}
            >
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
              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <a
                  href={generateGoogleFormURL(marker.name, marker.status)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#4285f4',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  📝 フォームに報告
                </a>
              </div>
            </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
};
