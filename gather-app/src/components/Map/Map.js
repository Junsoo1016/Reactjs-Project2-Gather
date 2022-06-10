import React, {useState, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '100%',
  height: '500px',
}

const center = {
  lat: 40.712776,
  lng: -74.005974
}

const options = {
  mapId: "83b90d4e6415406c"
}

function Map(props) {
  
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwcOSQ6hnqoqiXX_1D1ykHOBAZZ2UorHE"
  })

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  console.log(props.postList);

  const coordinatesList = props.postList.map((post) => {
    return post.coordinates
  })

  console.log(coordinatesList);

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        {coordinatesList.map((marker) => (
        <div>
          <Marker
          position= {{lat: marker.lat, lng: marker.lng}} 
          icon={{
            url:"https://i.ibb.co/4JFPCZP/location-dot-solid.png",
            scaledSize: new window.google.maps.Size(18,18)
          }}
          />
        </div>
      ))}
        
      </GoogleMap>
  ) : <h1>Loading</h1>
}
export default React.memo(Map)


// npm i @react-google-maps/api

// Shift + Return to add a new line