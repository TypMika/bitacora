import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";
import { Polyline } from '@react-google-maps/api';
const containerStyle = {
  width: "600px",
  height: "500px",
  margin: "0 auto",
};

const position = {
  lat: 20.508546,
  lng: -87.2135608,
};


navigator.geolocation.getCurrentPosition((position) => {
  return position.coords;
});


var options={
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,}


 const sites = {
  AudioVisuales: {
    center: { lat: 20.508189,  lng: -87.214118 },
    Descripcion: "Site de audio visuales",
  },
  MDFCC: {
    center: { lat: 20.508993, lng:  -87.214772 },
    Descripcion: "Site de centro de convenciones",
  },
  Legendary: {
    center: { lat: 20.509013, lng: -87.212627 },
    Descripcion: "Site de Legendary",
  },
  Gerencia: {
    center: { lat: 20.509489, lng:  -87.212094 },
    Descripcion: "Site de Gerencia",
  }
 }
 

function Map() {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={17}>
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          key={Math.random()}  // for react
          position={position}
        />
        {Object.keys(sites).map((site, i) => (

<>
<Circle key={i}
center={sites[site].center}
radius={25}
options={options}
/> 
{/* <Polyline
      onLoad={onLoad}
      path={path}
      options={options}
    /> */}
</>

        ))}
      
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
