coltrane.axis = function(data) {
  this.data = data;
  this.max = this.calculate_axis();
}

coltrane.axis.prototype.calculate_axis = function() {
  var max = _.max(this.data, function(key, value) { return value });
  return 15;
}
