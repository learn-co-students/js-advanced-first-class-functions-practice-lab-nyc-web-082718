// Code your solution in this file!
const logDriverNames = function(array){
  array.forEach(function(driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(array, location){
  return array.forEach(function(driver){
    if driver.hometown === location{
    console.log(driver.name)
    }
  })
}

const driversByRevenue = function(array){
  return array.sort(function(a, b){
      return a.revenue-b.revenue
  })
}

const driversByName = function(array) {
  return array.sort(function(a,b){
    nameA = a.name.toLowerCase()
    nameB = b.name.toLowerCase()

    if (nameA < nameB)
      return -1

    else if (nameA > nameB)
      return 1

    return 0
  })
}


const totalRevenue = function(array){
  return array.reduce(function(total, driver){
    return driver.revenue + total
  }, 0)
}

const averageRevenue = function(array){
  return totalRevenue(array) / array.length
}

  describe('averageRevenue()', function () {
    it('calculates the average revenue across all drivers', function () {
      expect(averageRevenue(drivers)).to.equal(3700);
    });
  });
});
