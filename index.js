// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}
//
function driversByRevenue(drivers) {
    const newDrivers = drivers.slice();
    return newDrivers.sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}


function driversByName(drivers) {
  const newDrivers = drivers.slice();
  return newDrivers.sort(function(driver1, driver2) {
  if (driver1.name > driver2.name) {
    return 1;
  } else if (driver1.name < driver2.name) {
    return -1;
  }
  return 0
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(acc, ele){
    return acc + ele.revenue;
  }, 0);
}


function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
