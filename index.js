// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = (drivers) => {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue
  })
}


const driversByName = (drivers) => {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = (drivers) => {
  let initialValue = 0

  return drivers.reduce(function(sum, currentValue) {
    return sum + currentValue.revenue
  }, initialValue)
}

const averageRevenue = (drivers) => {
  return totalRevenue(drivers)/drivers.length
}
