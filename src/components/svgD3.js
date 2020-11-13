import { useRef, useEffect } from "preact/hooks";
import { select } from "d3-selection";

function SVGD3(_props) {
  const node = useRef(null);

  const onLoad = () => {
    const lolli = select(node.current)
      .append("g")
      .attr("transform", "translate(100, 100)");

    lolli.append("line").attr("x2", 200).style("stroke", "black");
    lolli.append("circle").attr("cx", 200).attr("r", 3);
    lolli.append("text").attr("y", -10).text("Lolli");
  };

  useEffect(onLoad, []);

  return <svg width="500" height="300" ref={node}></svg>;
}

export default SVGD3;
