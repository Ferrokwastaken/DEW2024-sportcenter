const Service = require('./service')

class Facility extends Service {
  maintenanceCost

	constructor (name, maintenanceCost = 0) {
    super(name)
    this.maintenanceCost = maintenanceCost
  }
}

module.exports = Facility
