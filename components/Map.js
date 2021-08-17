import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import React, { useState } from 'react';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  console.log(selectedLocation);
  const coordinates = searchResults?.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }));
  // console.log(coordinates);

  const center = getCenter(coordinates);
  // console.log(center);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
    width: '100%',
    height: '100%',
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.mapbox_key}
      mapStyle='mapbox://styles/sanket08/cksen8hrr215o17ocj8dq506v'
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              className='cursor-pointer text-xl animate-bounce'
              onClick={(e) => setSelectedLocation(result)}
              aria-label='push-pin'
            >
              ❌
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className='text-red-400'
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
