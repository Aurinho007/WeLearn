import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { UserProvider } from "./contexts/UserContext";
import { ToastProvider } from "./contexts/ToastContext";
import { ModalProvider } from "./contexts/ModalContext";
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <ToastProvider>
        <ModalProvider>
          <Analytics>
          </Analytics>
          <App />
        </ModalProvider>
      </ToastProvider>
    </UserProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();


// Modal pro confirm
// Modal pro alert
// Dashboard
// Comrar dica