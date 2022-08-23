import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://03fec724815c4eb6b6acf68c7a449cc0@o1.ingest.sentry.io/6681679",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
