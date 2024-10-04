// require the User and Scooter classes - see where they can be used in ScooterApp.js

const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  // ScooterApp code here

  constructor(stations, registeredUsers){
    this.stations = {
      station1: [],
      station2: [],
      station3: []
    };
    this.registeredUsers = {}
  };


  regsiterUser(username, password, age){
    if(this.registeredUsers[username]){
      throw new Error("already registered");
    }
    if(age < 18){
      throw new Error("too young to register");
    }

    const newUser = new User(username, password, age);
    this.registeredUsers[username] = newUser;
    console.log(`${username} has been registered.`);
    return newUser;
  }

  loginUser(username, password){
    const user = this.registeredUsers[username];
    if(!user){
      throw new Error("Username or password is inorrect.");
    }else{
      return "user has been logged in."
    }
  }

  logoutUser(username){
    if(!user){
      throw new Error("no such user is logged in");
    }
    else{
      return "user is logged out"
    }
  }

  createScooter(station){
    const newScooter = new Scooter(station);
    if(!station){
      throw new Error("no such station");
    }
    else{
      this.stations[station].push(newScooter);
      return "created new scooter " + newScooter
    }
  }

  dockScooter(scooter, station){
    if(!station){
      throw new Error("no such station")
    }
    else if(this.station === station){
      throw new Error("scooter already at station")
    }
  }

  rentScooter(scooter, user){
  // check scooter is at station 
  // remove scooter from station 
  if(!scooter.station){
    throw new Error("scooter is already rented")
  }
  else if(!this.stations[scooter.station]){
    throw new Error("there is no station")
  }
  for(let i = 0; i < this.stations[scooter.station].length; i++){
    if(this.stations[scooter.station][i] === scooter){
      this.stations[scooter.station].splice(i, 1)
      console.log("scooter is rented")
      scooter.station = null
      this.user = user 
      return 
    }
  }
  }
}

module.exports = ScooterApp
