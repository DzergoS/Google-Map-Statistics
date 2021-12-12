import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import getExcel from "../utils/helpers/getExcel";
import "../Css/Map.css";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 46.431316,
  lng: 30.761157,
};

const CustomMap = ({
  setMarkers,
  markers,
  selected,
  setSelected,
  historyMarkers,
  setHistoryMarker,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCDumOjX4XyHM7f2IyunF_WmYQBoxDWSaw",
    libraries,
  });
  // Getting Data from Excel
  useEffect(() => {
    getExcel(setMarkers);
  }, [setMarkers]);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      options={options}
      onLoad={onMapLoad}
    >
      {markers.map((marker) => (
        <Marker
          key={`${marker.lat}-${marker.lng}`}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => {
            setSelected(marker);
            setHistoryMarker([...historyMarkers, marker]);
          }}
        />
      ))}
      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div className="pop-up">
            <h3>Title</h3>
            <p>{selected.title}</p>
            <h3>Date</h3>
            <p>{selected.date}</p>
            <h3>Event</h3>
            <p>{selected.event}</p>
            <h3>Lat</h3>
            <p>{selected.lat}</p>
            <h3>Lang</h3>
            <p>{selected.lng}</p>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

CustomMap.defaultProps = {
  markers: [],
  setMarkers: () => null,
  selected: null,
  setSelected: () => null,
  historyMarkers: [],
  setHistoryMarker: () => null,
};

CustomMap.propTypes = {
  markers: PropTypes.instanceOf(Array),
  setMarkers: PropTypes.func,
  selected: PropTypes.instanceOf(Object),
  setSelected: PropTypes.func,
  historyMarkers: PropTypes.instanceOf(Array),
  setHistoryMarker: PropTypes.func,
};

export default CustomMap;
