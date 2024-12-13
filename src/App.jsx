import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import { useState } from "react";

setupIonicReact();

const App = () => {
  const [data, setData] = useState({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <IonApp>
      <form action="" onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="name">user Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            required
            minLength={3}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            minLength={8}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </IonApp>
  );
};

export default App;
