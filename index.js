// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = function(drivers, hometown){
  logDriverNames(drivers.filter(driver => driver.hometown === hometown))
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort((d1, d2) => d1.revenue - d2.revenue)
}

const driversByName = function(drivers){
  return drivers.slice().sort((d1, d2) => d1.name.localeCompare(d2.name))
}

const totalRevenue = function(drivers){
  return drivers.reduce((total, driver) => total + driver.revenue, 0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
}
