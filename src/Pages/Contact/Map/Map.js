import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFqdTQ0NSIsImEiOiJja3dibm1oMTYxZG15Mm9xbWhsMjc1OW02In0.mSkwcM4sqBVzWbTdFJgj5Q";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.389099, 23.791599],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return (
    <div className="pb-5 map">
      <div id="map"></div>
    </div>
  );
};

export default Map;
