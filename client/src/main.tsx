import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./registerServiceWorker";

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for aggressive image caching (production only)
if (import.meta.env.PROD) {
  registerServiceWorker();
}
