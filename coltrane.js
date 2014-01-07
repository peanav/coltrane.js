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
    }).value();
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

  this.height = this.rootElement.offsetHeight;
  this.width = this.rootElement.offsetWidth;

  this.opts = opts;
  this.data = opts.data || [];

  this.calculate();

  this.draw();
};

coltrane._barChart.prototype.draw = function() {
  var self = this;


  this.x = d3.scale.ordinal()
      .domain(_.map(this.calculatedData, "label"))
      .rangeRoundBands([0, this.width], .3);

  this.y = d3.scale.linear()
      .domain([0, _.max(this.calculatedData, "value").value])
      .range([0, this.height]);

  this.svg = d3.select(this.rootElement).append("svg")
        .attr('width', this.width)
        .attr('height', this.height)
      .append('g');

  this.svg.selectAll('.bar')
      .data(this.calculatedData)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr("x", function(d) { return self.x(d.label); })
      .attr("width", self.x.rangeBand())
      .attr("y", function(d) { return self.height - self.y(d.value); })
      .attr("height", function(d) { return self.y(d.value); });

  return this.update;
};

coltrane._barChart.prototype.redraw = function() {
  this.svg.selectAll('.bar')
};

coltrane._barChart.prototype.calculate = function() {
  this.calculatedData = coltrane.data.calculate(this.data);
};

coltrane._barChart.prototype.update = function(data) {
};
