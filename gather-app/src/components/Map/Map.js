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
    googleMapsApiKey: "AIzaSyAAGkc4dkx03eSa0QgCOijkjgdUJpWgJFQ"
  })

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [address, setAddress] = useState({
    lat: null,
    lng: null
})

  // const convertAddress = () => {
  //   const locations = props.postList
  //   .map((post) => Geocode.fromAddress(post.location))
  //   setAddress(locations)
  // }
  
  console.log(address);
  const convertAddress = () => {
  Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setAddress({ lat: lat, lng: lng })
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
}

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {/* <Marker 
        position={locations}
        icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        /> */}
      </GoogleMap>
  ) : <h1>Loading</h1>
}
export default React.memo(Map)


// npm i @react-google-maps/api

// Shift + Return to add a new line