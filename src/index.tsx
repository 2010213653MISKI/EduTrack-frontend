import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SchoolThrive } from "./screens/SchoolThrive";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SchoolThrive />
  </StrictMode>,
);
