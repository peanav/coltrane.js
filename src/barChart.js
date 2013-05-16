coltrane.barChart = function(element, options) {
  return new coltrane._barChart(element, options);
};

coltrane._barChart = function(ele, opts) {
  typeof(ele) === 'object' ? this.rootElement = ele : this.querySelector = ele;
  if(this.querySelector)
    this.rootElement = document.querySelector(this.querySelector);
  this.data = coltrane.data.calculate(opts.data || []);
  this.draw();
};

coltrane._barChart.prototype.draw = function() {
  var height = 400;
  var width = 400;

  var x = d3.scale.ordinal()
          .domain(_.map(this.data, "label"))
          .rangeRoundBands([0, width], .3);

  var y = d3.scale.linear()
          .domain([0, _.max(this.data, "value").value])
          .range([0, height]);

  this.svg = d3.select(this.rootElement).append("svg")
              .attr('width', width)
              .attr('height', height)
            .append('g');

  this.svg.selectAll('.bar')
      .data(this.data)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr("x", function(d) { return x(d.label); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return height-y(d.value); })
      .attr("height", function(d) { return y(d.value); });
};
