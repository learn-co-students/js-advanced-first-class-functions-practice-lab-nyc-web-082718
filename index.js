// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach((element) =>
    console.log(element.name));
}

function logDriversByHometown(drivers, loc){
  selection = (drivers.filter(driver => driver.hometown === loc))
  logDriverNames(selection)
}

function driversByRevenue(drivers){
  result = drivers.slice()
  return result.sort((a,b) => a.revenue-b.revenue)
}

function driversByName(drivers){
  result = drivers.slice()
  return result.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
}

function totalRevenue(drivers){
  revenues = drivers.map(driver => driver.revenue)
  return revenues.reduce(function(rev, sum, index, revenues){
    return rev + sum
  })
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
