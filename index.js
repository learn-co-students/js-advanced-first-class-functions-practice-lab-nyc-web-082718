function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) { console.log(driver.name) }
  })
}

function driversByRevenue(drivers) {
  const drivers_copy = drivers.slice()
  return drivers_copy.sort(function(a, b) {
    return a.revenue > b.revenue
  })
}

function driversByName(drivers) {
  const drivers_copy = drivers.slice()
  return drivers_copy.sort(function(a, b) {
    return a.name > b.name
  })
}

function totalRevenue(drivers) {
  const acc = (accumulator, driver) => accumulator + driver.revenue
  return drivers.reduce(acc, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
