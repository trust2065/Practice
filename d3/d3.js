const dataArray = [20, 40, 50];

// svg container
const canvas = d3
  .select("body")
  .append("svg")
  .style("color", "red")
  .attr("width", 500)
  .attr("height", 500);

// empty selection
const bars = canvas
  .selectAll("anything")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", data => data * 10)
  .attr("height", 50)
  .attr("y", (data, i) => i * 100);
