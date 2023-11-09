import React from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

const MapContainer = ({ latitude, longitude }) => {
  const mapStyles = {
    height: '400px',
    width: '100%', 
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={17}>
      <MarkerF position={defaultCenter} />
    </GoogleMap>
  );
};

export default MapContainer;
