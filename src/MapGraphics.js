import { useEffect, useState,  useRef} from "react";
import Graphic from "@arcgis/core/Graphic";

import Faker from "faker";

const MapGraphics = ({view}) => {
    const formRef = useRef();
    const [state, setState] = useState({
        name: "",
        address: "",
      });
      Faker.locale = "ar";
    
      let locations = [     {
        longitude:7.666065, 
        latitude: 45.097283
    },
    {
        longitude:7.635756, 
        latitude: 45.083461
    },
    {
        longitude:7.677794, 
        latitude: 45.101055
    },
    {
        longitude:12.98114309, 
        latitude: 46.06005178
    },
    {
        longitude:13.54822195, 
        latitude: 42.08483293
    },
    {
        longitude:13.31540594, 
        latitude: 46.44804944
    },
    {
        longitude:7.85656384, 
        latitude: 45.4608501
    },

];
    //   for (let index = 0; index < 10; index++)
    //     locations.push({
    //       name: Faker.name.findName(),
    //       address: Faker.address.streetAddress(),
    //       latitude: Faker.address.latitude(),
    //       longitude: Faker.address.longitude(),
    //     });
        useEffect(() => {
            const glResult1 = view.map.findLayerById("glResult1");
        
            if (glResult1) {
              locations.map((location) => {
                const graph = new Graphic({
                  geometry: {
                    type: "point",
                    latitude: location.latitude,
                    longitude: location.longitude,
                  },
                  symbol: {
                    type:"simple-marker",
                    // color:[226, 119, 40], orange
                    color: "blue",
                    size: 8,
                    outline: {
                        color: [255, 255, 255], // White
                        width: 1
                    }
                  },
                  attributes: {
                    title: location.name,
                    content: location.address,
                  },
                });
                glResult1.add(graph);
            });
        }
        
        
            // view.ui.add(formRef.current, "top-right");
            // view.on("click", (event) => {
            //   view.hitTest(event).then((resp) => {
            //     if (resp.results.length > 0) {
            //       setState({
            //         name: resp.results[0].graphic.attributes.title,
            //         address: resp.results[0].graphic.attributes.content,
            //       });
            //     }
            //   });
            // });
          }, [view.map.findLayerById("glResult1")]);
            
        

 return null
};

export default MapGraphics;