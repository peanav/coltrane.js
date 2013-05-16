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
  return new Coltrane._barChart(element, options);
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
