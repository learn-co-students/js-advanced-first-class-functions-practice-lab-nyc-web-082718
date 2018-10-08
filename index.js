const logDriverNames = function(drivers) {
  drivers.forEach(element => console.log(element.name))
}

const logDriversByHometown = function(drivers, hometown) {
  logDriverNames(drivers.filter(driver => driver.hometown === hometown));
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort((driver1, driver2) => driver1.revenue - driver2.revenue);
}

const driversByName = function(drivers) {
  return drivers.slice().sort((driver1, driver2) => driver1.name < driver2.name ? -1 : 1);
}

const totalRevenue = function(drivers) {
  return drivers.reduce((memo, dr2) => memo + dr2.revenue, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
