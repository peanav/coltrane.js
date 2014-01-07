coltrane.data = {
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
