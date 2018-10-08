function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.

function logDriversByHometown(drivers, location) {
  const matchingDrivers = drivers.filter(function (driver) {
    return driver.hometown === location;
  })
  matchingDrivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.

function driversByRevenue(drivers) {
  let myDrivers = drivers.slice();
  return myDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.

function driversByName(drivers) {
  let myDrivers = drivers.slice();
  return myDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

function totalRevenue(drivers) {
  return drivers.reduce(function (total, n) {
    return total + n.revenue
  }, 0)
}

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
