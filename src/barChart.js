Coltrane.barChart = function(element, options) {
  return new Coltrane._barChart(element, options);
};

Coltrane._barChart = function(ele, opts) {
  typeof(ele) === 'object' ? this.rootElement = ele : this.querySelector = ele;
  if(this.querySelector)
    this.rootElement = document.querySelector(this.querySelector);
};
