import React, {useState, useCallback, useEffect} from 'react'
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

  // const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwcOSQ6hnqoqiXX_1D1ykHOBAZZ2UorHE"
  })

  if(loadError) return "Error loading maps"
  if(!isLoaded) return "Loading Maps"

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   //map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  const coordinatesList = props.postList.map((post) => {
    return (
      <Marker
      onLoad={onLoad}
      position= {{lat: post.coordinates.lat, lng: post.coordinates.lng}} 
      icon={{
        url:"https://i.ibb.co/4JFPCZP/location-dot-solid.png",
        scaledSize: new window.google.maps.Size(15,20)
      }}
      />
    )
  })

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        options={options}
      >

      {coordinatesList} 

      </GoogleMap>
  ) : <h1>Loading</h1>
}
export default React.memo(Map)
