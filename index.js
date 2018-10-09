// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, town) {
  const matches = drivers.filter(function(driver) {
    return driver.hometown === town
  })
  matches.forEach(function(driver) {
    console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  const newArray = [...drivers]
  return newArray.sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  const newArray = [...drivers]
  return newArray.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce((a, b) => a + b.revenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
