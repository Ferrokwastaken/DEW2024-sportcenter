class Service {
  name
  ratings = []

  constructor (name) {
    this.name = name
  }

  giveRating (number) {
    return this.ratings.push(number)
  }

  get rating () {
    if (this.ratings.length === 0) {
      return 0
    }
    let result = 0
    this.ratings.forEach(element => {
      result += element
    })
    return Math.round((result / this.ratings.length) * 100) / 100
  }

  calculateCost () {
    return this.maintenanceCost / 12
  }
}

module.exports = Service
