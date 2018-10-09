// Code your solution in this file!
 function logDriverNames(drivers) {
   drivers.forEach(function(driver) {
     console.log(driver.name)
   })
 }

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location)
      console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  let orderedDrivers = drivers.slice()
  orderedDrivers.sort(function (a, b) {
  return a.revenue - b.revenue;
})
  return orderedDrivers
}

function driversByName(drivers) {
  let newArray = drivers.slice()
  newArray.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
  return newArray
}

function totalRevenue(drivers) {
  let summed = 0
  drivers.forEach(function(driver) {
    summed += driver.revenue
  })
  return summed
}

function averageRevenue(drivers) {
  let avg = 0
  drivers.forEach(function(driver) {
    avg += driver.revenue
  })
  avg/=(drivers.length)
  return avg
}
