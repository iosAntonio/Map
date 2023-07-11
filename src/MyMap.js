
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView"
import { useEffect, useRef, useState } from "react";
import MapWidgets from "./MapWidgets";
import MapGraphics from "./MapGraphics";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

const MyMap = () => {
const mapRef = useRef(null);
const [view, setView] = useState(null)

const glResult1 = new GraphicsLayer({
    id: "glResult1",
  });

  const glResult2 = new GraphicsLayer({
    id: "glResult2",
  });

useEffect (() =>{ 
new MapView({
    container: mapRef.current,
    map: new Map({
        // basemap:"streets", realistica
        basemap:"dark-gray-vector",
        layers: [glResult1, glResult2],
    }),
    // center: [7.68685655,45.070312],  longitudine,latitudine Torino 
    center: [12.4963655, 41.9027835], // longitudine,latitudine Italia
    zoom: 4,
}).when((view) => setView(view))
}, []);

    return <div ref={mapRef} style={{height: "100vh", width:"100%"}}>
        {view && (
            <>
        <MapWidgets view={view}/>
        <MapGraphics view={view}/>
        </>
        )}
    </div>
}

export default MyMap;