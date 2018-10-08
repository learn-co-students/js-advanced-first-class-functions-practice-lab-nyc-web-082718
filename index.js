// Code your solution in this file!
const logDriverNames = function(array) {
  array.forEach(a => console.log(a.name))
}

const logDriversByHometown = function(array, location) {
  let matches = array.filter(a => a.hometown === location)
   logDriverNames(matches)
}

const driversByRevenue = function(array) {
  let dbr = array.slice()
  return dbr.sort((a, b) => a.revenue - b.revenue)
}

const driversByName = function(array) {
  let dbn = array.slice()
return  dbn.sort(function(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
}

const totalRevenue = function(array) {
  let dra = array.map( m => m.revenue)
  return dra.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;}, 0);
}

const averageRevenue = function(array){
  let dra = array.map( m => m.revenue).length
  return totalRevenue(array) / dra
}
