
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView"
import { useEffect, useRef, useState } from "react";
import MapWidgets from "./MapWidgets";
import MapGraphics from "./MapGraphics";

const MyMap = () => {
const mapRef = useRef(null);
const [view, setView] = useState(null)
useEffect (() =>{
new MapView({
    container: mapRef.current,
    map: new Map({
        basemap:"dark-gray-vector",
    }),
    center: [12.4963655, 41.9027835], // longitudine,latitudine
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