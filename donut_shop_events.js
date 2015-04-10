
(function () {
  var DonutShop = window.DonutShop;
  var elTable = document.getElementById('shop-table');
  var shopForm = document.getElementById('new-location-form');
  var shopData = [];
  var downtown = new DonutShop('Downtown', 8, 43, 4.5);
  var capitolHill =  new DonutShop('Capitol Hill', 4, 37, 2.00);
  var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
  var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
  var ballard = new DonutShop('Ballard', 8, 58, 3.75);

  var renderAllShops = function() {
    elTable.innerHTML = '<tr><th class ="location"> Location </th><td class ="hours"> 6 AM </td><td class ="hours"> 7 AM </td><td class ="hours"> 8 AM </td><td class ="hours"> 9 AM </td><td class ="hours"> 10 AM </td><td class ="hours"> 11 PM </td><td class ="hours"> 12 PM </td><td class ="hours"> 1 PM </td><td class ="hours"> 2 PM </td><td class ="hours"> 3 PM </td><td class ="hours"> 4 PM </td><td class ="hours"> 5 PM </td><td class="total">Total</td></tr>';
    elTable.appendChild(downtown.render());
    elTable.appendChild(capitolHill.render());
    elTable.appendChild(southLakeUnion.render());
    elTable.appendChild(wedgewood.render());
    elTable.appendChild(ballard.render());
  }

  var handleShopFormSubmit = function(event) {
    event.preventDefault();
    if(!event.target.location.value) {
      return alert('"Shop Location" needs a value');
    }
    if(!event.target.minCustomers.value) {
      return alert('"Min Customers" needs a value.');
    }
    if(!event.target.maxCustomers.value) {
      return alert('"Max Customers" needs a value.');
    }
    if(!event.target.avgDonut.value) {
      return alert('"Average Donuts" needs a value.');
    }
    var newDonutShop = new DonutShop (event.target.location.value, event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgDonut.value);
    event.target.location.value = null;
    event.target.minCustomers.value = null;
    event.target.maxCustomers.value = null;
    event.target.avgDonut.value = null;
    shopData.push(newDonutShop);
    elTable.appendChild(newDonutShop.render());
};
    shopForm.addEventListener('submit', handleShopFormSubmit);
    renderAllShops();
})();
