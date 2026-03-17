import posthog from "posthog-js";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize PostHog analytics + session replay
if (typeof window !== "undefined") {
	posthog.init("phc_SS2Fg8CYo9IaZeiDMz71k9Pz0aY39rc4RkLF5xOIirt", {
		api_host: "https://us.i.posthog.com",
		capture_pageview: true,
		capture_pageleave: true,
		session_recording: {
			maskAllInputs: false,
		},
		// Provided default from PostHog snippet
		defaults: "2026-01-30",
	});
}

createRoot(document.getElementById("root")!).render(<App />);
