import "./style";
import { render } from "preact";
import Router from "preact-router";

import SVGBasics from "./components/svgBasics";
import SVGD3 from "./components/svgD3";
import FetchData from "./components/fetchData";

function App(_props) {
  return (
    <div>
      <h1>D3 Playground</h1>
      <Router>
        <SVGBasics path="/basics" />
        <SVGD3 path="/d3" />
      </Router>
      <FetchData />
    </div>
  );
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
