const data = [10];

const canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

const circle1 = canvas
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 150)
  .attr("r", 25);

const circle2 = canvas
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 250)
  .attr("r", 25);

const circles = canvas
  .selectAll("circle")
  .data(data)
  // update
  .attr("fill", "green")
  // exit
  .exit()
  .attr("fill", "yellow");

// enter:  data.length > existDOM.length
// update: data.length = existDOM.length
// exit:   data.length < existDOM.length
