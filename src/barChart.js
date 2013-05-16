coltrane.barChart = function(element, options) {
  return new coltrane._barChart(element, options);
};

coltrane._barChart = function(ele, opts) {
  typeof(ele) === 'object' ? this.rootElement = ele : this.querySelector = ele;
  if(this.querySelector)
    this.rootElement = document.querySelector(this.querySelector);
};

coltrane._barChart.prototype.draw = function(ele, data) {

  var x = d3.scale.ordinal().range(0, data.length-1);
  var y = d3.scale.ordinal().range(_.last(data).percentage);

  var svg = d3.select(ele).append("svg")
              .attr('width', 300)
              .attr('width', 300)
            .append('g');

  svg.selectAll('.bar')
      .data(data)
    .enter().append('rect')
      .attr('class', 'bar');


};
