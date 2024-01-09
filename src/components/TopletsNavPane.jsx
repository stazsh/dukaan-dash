import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const routes = {
  Home: ["home.svg", "/home"],
  Products: ["products.svg", "/products"],
  Delivery: ["delivery.svg", "/delivery"],
  Marketing: ["marketing.svg", "/marketing"],
  Analytics: ["analytics.svg", "/analytics"],
  Payments: ["payments.svg", "/payments"],
  Tools: ["tools.svg", "/tools"],
  Discounts: ["discounts.svg", "/discounts"],
  Audience: ["audience.svg", "/audience"],
  Appearance: ["appearance.svg", "/appearance"],
  Plugins: ["plugins.svg", "/plugins"],
};

function TopletsNavPane() {
  const [selected, setSelected] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(routes[selected][1]);
  }, [selected]);

  return (
    <div className="space-y-1 text-left">
      {Object.keys(routes).map((applet) =>
        applet !== selected ? (
          <div
            key={applet}
            className="p-3 flex items-center opacity-80 hover:opacity-100 flex-row space-x-3 rounded-md bg-white bg-opacity-0 hover:bg-opacity-20 duration-100 cursor-pointer font-medium"
            onClick={() => setSelected(applet)}
          >
            <img src={routes[applet][0]} />
            <div>{applet}</div>
          </div>
        ) : (
          <div
            key={applet}
            className="p-3 flex items-center opacity-100 flex-row space-x-3 rounded-md bg-white bg-opacity-20 duration-100 cursor-pointer font-medium"
            onClick={() => setSelected(applet)}
          >
            <img src={routes[applet][0]} />
            <div>{applet}</div>
          </div>
        )
      )}
    </div>
  );
}

export default TopletsNavPane;
