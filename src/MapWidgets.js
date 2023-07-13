import { useEffect } from "react";
import Home from "@arcgis/core/widgets/Home";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Search from "@arcgis/core/widgets/Search";

const MapWidgets = ({ view }) => {
  useEffect(() => {
    view.ui.add(
      new Home({
        view: view,
      }),
      "top-left"
    );

    view.ui.add(
      new ScaleBar({
        view: view,
      }),
      "bottom-left"
    );
    // view.ui.add( 
    //   new Search({
    //   view: view
    // }),
    // 'top-right'
    // );
  }, [view]);

  return null;
};

export default MapWidgets;