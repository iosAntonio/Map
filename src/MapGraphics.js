import React, {useEffect} from "react";

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
            size: 5
    },
//     geometry:{
//         type:"point",
//         longitude:7.6868565, 
//         latitude: 45.070312
// },
//    symbol:{
//     type:"simple-marker",
//     color:[226, 119, 40],
//     size: 5
// }

           
        });

        view.graphics.add(graph)
      
        }, []);
            
        

 return null
};

export default MapGraphics;