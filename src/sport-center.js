const Activity = require('./activity')
const Service = require('./service')
const Facility = require('./facility')

class SportCenter {
  name
  #services = []
  fee
  membership

  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
  }

  income () {
    return this.fee * this.membership
  }

  getServices () {
    return this.#services
  }

  addService (...services) {
    services.forEach((service) => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service)
      }
    })
  }

  removeService (service) {
    if (service instanceof Service) {
      const index = this.#services.indexOf(service)
      if (index >= 0) {
        this.#services.splice(index, 1)
      }
    }
  }

  orderServicesBy (order) {
    if (order === 'name') {
      return this.#services.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (order === 'rating') {
      return this.#services.sort((b, a) => a.rating - b.rating)
    }
  }

  getFacilities () {
    return this.#services.filter(service => {
      if (service instanceof Facility) {
        return service
      }
    })
  }

  getActivities () {
    return this.#services.filter(service => {
      if (service instanceof Activity) {
        return service
      }
    })
  }
}

module.exports = SportCenter
