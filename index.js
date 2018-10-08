// Code your solution in this file!
// ok

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, city) {
  drivers.forEach(function(driver) {
    if (driver.hometown === city) {
      console.log(driver.name)
    }
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
  let orderedDrivers = drivers.slice()
  orderedDrivers.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  return orderedDrivers
}

function totalRevenue(drivers) {
  let total = 0
  drivers.forEach(function (driver) {
    total += driver.revenue;
  })
  return total
}

function averageRevenue(drivers) {
  total = totalRevenue(drivers)
  return total / drivers.length
}



// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ];
