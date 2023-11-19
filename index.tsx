import { h, render } from "preact";
import App from "./App";
import "./input.css";

// Render the component to the DOM
render(<App />, document.getElementById("main") as HTMLElement);
