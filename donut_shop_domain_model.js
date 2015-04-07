var DonutShop = function (shop, minCustomers, maxCustomers, AvgDonuts) {
  this.shop = shop;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.AvgDonuts = AvgDonuts;
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
  for(var i = 0; i < 13; i++) {
    var hourlyTotal = this.hourlyAmount();
    this.hourly.push(hourlyTotal);
    this.dayTotals += hourlyTotal;
  }
  return this.dayTotals;
};

DonutShop.prototype.render = function() {
  var dailyTotal = this.dailyAmount();
  var tableRow = document.getElementById(this.shop);
  for (var i = 0; i < 13; i++) {
    var tableData = document.createElement('td');
    tableData.textContent = this.hourly[i];
    tableRow.appendChild(tableData);
  }
  tableData.textContent = dailyTotal;
  tableRow.appendChild(tableData);
};
var downtown = new DonutShop('shop1', 8, 43, 4.5);
var capitolHill =  new DonutShop('shop2', 4, 37, 2.00);
var southLakeUnion = new DonutShop('shop3', 9, 23, 6.33);
var wedgewood = new DonutShop('shop4', 2, 28, 1.25);
var ballard = new DonutShop('shop5', 8, 58, 3.75);
downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();

// console.log(downtown.hourlyAmount());
// console.log(downtown.dailyAmount());
