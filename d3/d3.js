const data = [10];

const canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

const circle = canvas
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 25);

circle
  .transition()
  // .duration(500)
  .delay(1000)
  .attr("cx", 100)
  // .transition()
  // .attr("cy", 100)
  // .transition()
  // .attr("cx", 50)
  // v4 we use 'on' instead of 'each' in v3
  .on("start", function() {
    d3.select(this).attr("fill", "red");
  });
