const data = [10, 20, 30, 40, 50];

console.log(data.sort(d3.descending));
console.log(d3.min(data));
console.log(d3.max(data));
console.log(d3.extent(data));
console.log(d3.sum(data));
console.log(d3.mean(data));
console.log(d3.median(data));
console.log(d3.shuffle(data));

const canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);
