// src/hooks/useTemplateInit.js
import { useEffect } from "react";

export function useTemplateInit() {
  useEffect(() => {
    // All vendor scripts are already loaded (they are in index.html before React).
    // Wait one tick for React to finish painting the DOM, then call initTemplate.
    const timer = setTimeout(() => {
      if (typeof window.initTemplate === "function") {
        window.initTemplate();
      } else {
        console.warn("window.initTemplate not found — check main.js loaded correctly.");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []); // runs once after first render
}