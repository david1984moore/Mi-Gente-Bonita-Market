import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./registerServiceWorker";

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for aggressive image caching
if (import.meta.env.PROD || import.meta.env.DEV) {
  registerServiceWorker();
}
