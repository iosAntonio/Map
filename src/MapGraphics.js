import {useEffect} from "react";

import Graphic from "@arcgis/core/Graphic";

const MapGraphics = ({view}) => {
    useEffect (() =>{
        const graph = new Graphic({
            geometry:{
                type:"point",
                longitude:12.4963655, 
                latitude: 41.9027835
        },
        symbol:{
            type:"simple-marker",
            color:[226, 119, 40],
            size: 5,
            outline: {
                color: [255, 255, 255], // White
                width: 1
            }
    }  
        });
    
        view.graphics.add(graph)
      
        }, [view.graphics]);
            
        

 return null
};

export default MapGraphics;