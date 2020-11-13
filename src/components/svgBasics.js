function SVGBasics(_props) {
  return (
    <svg width="500" height="300">
      <g>
        <line x1="100" y1="100" x2="300" y2="100" stroke="black" />
        <circle cx="300" cy="100" r="3" />
        <text x="100" y="90">
          Lolli 1
        </text>
      </g>
      <g>
        <line x1="100" y1="200" x2="200" y2="200" stroke="black" />
        <circle cx="200" cy="200" r="3" />
        <text x="100" y="190">
          Lolli 2
        </text>
      </g>
    </svg>
  );
}

export default SVGBasics;
