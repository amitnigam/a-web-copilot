import posthog from "posthog-js";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize PostHog analytics + session replay (env-driven)
const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_POSTHOG_HOST ?? "https://us.i.posthog.com";

if (typeof window !== "undefined" && posthogKey) {
	posthog.init(posthogKey, {
		api_host: posthogHost,
		capture_pageview: true,
		capture_pageleave: true,
		session_recording: {
			maskAllInputs: false,
		},
	});
} else if (typeof window !== "undefined") {
	// Surface a soft warning in case env vars were not provided at build time
	console.warn("PostHog not initialized: missing VITE_POSTHOG_KEY.");
}

createRoot(document.getElementById("root")!).render(<App />);
