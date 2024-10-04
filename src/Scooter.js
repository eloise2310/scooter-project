
class Scooter {
  // scooter code here
  static nextSerial = 1

  constructor(station){;
  this.station = station;
  this.checkedOutUser = null;
  this.serial = Scooter.nextSerial++;
  this.charge = 100
  this.isBroken = false
  }

  rent(user){
    if(this.charge < 20){
      throw new Error("scooter needs to charge")
    }
    else if(this.isBroken === true){
      throw new Error("scooter needs repair")
    }else {
      this.station = null
      this.checkedOutUser = user 
    }
  }

  dock(station){
    this.station = station;
    this.checkedOutUser = null
  }
}

module.exports = Scooter
