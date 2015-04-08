(function () {
var DonutShop = function (shop, minCustomers, maxCustomers, AvgDonuts) {
  this.shop = shop;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.AvgDonuts = AvgDonuts;
  this.location = location;
  this.hourly = [];
  this.dayTotals = 0;
};

DonutShop.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

DonutShop.prototype.hourlyAmount = function() {
  return Math.round(this.generateRandom() * this.AvgDonuts);
};

DonutShop.prototype.dailyAmount = function() {
  for(var i = 0; i < 12; i++) {
    var hourlyTotal = this.hourlyAmount();
    this.hourly.push(hourlyTotal);
    this.dayTotals += hourlyTotal;
  }
  return this.dayTotals;
};

DonutShop.prototype.render = function() {
  var dailyTotal = this.dailyAmount();
  var elTableRow = document.createElement('tr');
  var elTableHead = document.createElement('th');
  var elDailyTotal = document.createElement('td');
  elTableHead.textContent = this.shop;
  elTableRow.appendChild(elTableHead);
  for (var i = 0; i < 12; i++) {
    var eltableData = document.createElement('td');
    eltableData.textContent = this.hourly[i];
    elTableRow.appendChild(eltableData);
  }
  elDailyTotal.textContent = dailyTotal;
  elTableRow.appendChild(elDailyTotal);
  return elTableRow;
  };

window.DonutShop = DonutShop;

})();

