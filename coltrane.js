var coltrane = {
  version: '0.1'
};
;coltrane.data = {
  calculate: function(data) {
    var total = _.reduce(data, function(sum, item) {
      return sum + coltrane.data.parseValue(_.values(item)[0]);
    }, 0);
    return _(data).map(function(item) {
      var valLabel = _(item).values().first(),
          val = coltrane.data.parseValue(valLabel);
      return {
        label: _.keys(item)[0],
        valueLabel: valLabel,
        value: val,
        percentage: +(val / total).toFixed(3)
      };
    }).sortBy('value').value();
  },

  parseValue: function(value) {
    return typeof(value) === "number" ? value : number = +value.replace(/[^0-9\.]+/g,"");
  }
};
;coltrane.barChart = function(element, options) {
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
