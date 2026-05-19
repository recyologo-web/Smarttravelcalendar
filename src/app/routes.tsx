import { createBrowserRouter } from "react-router";
import { MobileShell } from "./components/MobileShell";
import { Splash } from "./views/Splash";
import { Dashboard } from "./views/Dashboard";
import { Schedule } from "./views/Schedule";
import { SmartPropose } from "./views/SmartPropose";
import { Settings } from "./views/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/app",
    Component: MobileShell,
    children: [
      { index: true, Component: Dashboard },
      { path: "schedule", Component: Schedule },
      { path: "propose", Component: SmartPropose },
      { path: "settings", Component: Settings },
    ],
  },
]);
