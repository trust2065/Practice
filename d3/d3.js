const dataArray = [20, 40, 50, 60];

const width = 500;
const height = 500;
const domainMax = dataArray[dataArray.length - 1];

const widthScale = d3
  .scaleLinear()
  .domain([0, domainMax])
  .range([0, width]);

const colorScale = d3
  .scaleLinear()
  .domain([0, domainMax])
  .range(["red", "blue"]);

const axis = d3
  .axisBottom()
  .ticks(5)
  .scale(widthScale);

// svg container
const canvas = d3
  .select("body")
  .append("svg")
  .style("color", "red")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(20, 0)");

// empty selection
const bars = canvas
  .selectAll("anything")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", data => widthScale(data))
  .attr("height", 50)
  .attr("fill", data => colorScale(data))
  .attr("y", (data, i) => i * 100);

canvas
  .append("g")
  .attr("transform", "translate(0, 400)")
  .call(axis);