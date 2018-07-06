const data = [
  { name: "Jason", age: 15 },
  { name: "Jeny", age: 10 },
  { name: "Kay", age: 20 }
];

const canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

canvas
  .selectAll("anything")
  .data(data)
  .enter()
  .append("rect")
  .attr("width", data => data.age * 10)
  .attr("height", 40)
  .attr("y", (d, i) => i * 50);
// .attr("fill", "blue");

canvas
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("fill", "white")
  .attr("y", (d, i) => i * 50 + 20)
  .text(data => data.name);
