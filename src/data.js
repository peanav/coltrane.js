Coltrane.data = {};

Coltrane.data.calculate = function(data) {
  var total = _.reduce(data, function(sum, item) {
    return sum + Coltrane.data.parseValue(_.values(item)[0]);
  }, 0);
  return _(data).map(function(item) {
    var valLabel = _(item).values().first(),
        val = Coltrane.data.parseValue(valLabel);
    return {
      label: _.keys(item)[0],
      valueLabel: valLabel,
      value: val,
      percentage: +(val / total).toFixed(3)
    };
  }).sortBy('value').value();
};

Coltrane.data.parseValue = function(value) {
  return typeof(value) === "number" ? value : number = +value.replace(/[^0-9\.]+/g,"");
};
