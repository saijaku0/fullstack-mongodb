import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import { appRouter } from "app/router";
import { store } from "app/store";

import "@/index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter()} />
  </Provider>
);
