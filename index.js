// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach((driver) => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach( function(driver) {
    if (driver.hometown === hometown) {console.log(driver.name)}
        }
      )
    }

const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue;
      });
    };

const driversByName = function(drivers){
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name);
      }
    );
  }

const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };

const averageRevenue = function (drivers){
  let totalRev = totalRevenue(drivers)
  let numDrivers = drivers.length
  let avgRev = totalRev / numDrivers
  return avgRev
}
