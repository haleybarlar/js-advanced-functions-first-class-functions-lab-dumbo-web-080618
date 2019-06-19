const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function() {
  return drivers.slice(-2)
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareQuintupler = function(value) {
  return value * value
}

function createFareMultiplier(value) {
  fareQuintupler(value)
}
