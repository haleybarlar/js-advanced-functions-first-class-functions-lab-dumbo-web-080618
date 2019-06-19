const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function() {
  return drivers.slice(-2)
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value) {
  return function fareQuintupler(number) {
    return value * number
  }
}

function fareDoubler(value) {
  return value * 2
}

function fareTripler(value) {
  return value * 3
}
