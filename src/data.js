Coltrane.data = {};

Coltrane.data.percentetizeData = function(data) {
};

Coltrane.data.parseValue = function(value) {
  return typeof(value) === "number" ? value : number = +value.replace(/[^0-9\.]+/g,"");
};

Coltrane.data.isPercentage = function(numberString) {
  return !!numberString.match(/%$/);
};
