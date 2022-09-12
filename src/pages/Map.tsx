import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Polygon, Marker, Popup, GeoJSON } from 'react-leaflet';
import topodata from "../assets/map/ctprvn/ctp_rvn.json";
import "leaflet/dist/leaflet.css";


const Map = () => {
  const scrollWheelZoom = true;
  const defaultZoom = 8;
  const center = [37, 127]
  const [features, setFeatures] = useState(Array());

  useEffect(()=>{
    const new_features = Array();
    // 지도 데이터의 좌표가 leaflet에서 지원하는 좌표와 반대로 되어 있어서 변경하는 부분
    // 지도 데이터가 변경된다면 삭제 가능해 짐
    topodata.features.forEach((feature) => {
      let new_feature = feature;
      const coordinates = feature.geometry.coordinates;
      let new_coordinates;

      if (feature.geometry.type === "Polygon") {
        new_coordinates = coordinates.map(coordinate => coordinate.map((coord) => coord.reverse()));
      } else if (feature.geometry.type === "MultiPolygon") {
        new_coordinates = coordinates.map(coordinate => coordinate.map((coords) => coords.map(coord => coord.reverse())));
      }
      new_feature.geometry.coordinates = new_coordinates;
      console.log(new_coordinates)
      new_features.push(new_feature);
    })
    setFeatures(new_features);
  }, []);

  return (
      <MapContainer center={center} zoom={defaultZoom} scrollWheelZoom={scrollWheelZoom} style={{height: "80vh"}}>
        {
          features.map(feature => (
            <Polygon pathOptions={{ color: "black"}} positions={feature.geometry.coordinates}>
              <Popup>
                {feature.properties.CTP_ENG_NM}
              </Popup>
            </Polygon>
          ))
        }
      </MapContainer>
  )
}

export default Map;