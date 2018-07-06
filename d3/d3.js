const data = [10, 50, 80];
const radius = 300;

const color = d3.scaleOrdinal().range(["red", "blue", "green"]);

const canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 1500)
  .attr("height", 1500);

const group = canvas.append("g").attr("transform", "translate(300, 300)");

const arc = d3
  .arc()
  .innerRadius(150)
  .outerRadius(radius);

const pie = d3.pie().value(data => data);

const arcs = group
  .selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");

arcs
  .append("path")
  .attr("d", arc)
  .attr("fill", data => color(data.data));

arcs
  .append("text")
  // put label in right place
  .attr("transform", data => `translate(${arc.centroid(data)})`)
  .attr("text-anchor", "middle")
  .attr("font-size", "2.5rem")
  .text(data => data.data);
