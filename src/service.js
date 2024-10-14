class Service {
  name
  ratings = []

  constructor (name) {
    this.name = name
  }

  giveRating (number) {
    return this.ratings.push(number)
  }

  get rating {
    
  }
}

module.exports = Service
