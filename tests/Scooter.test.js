const Scooter = require('../src/Scooter')
const User = require("../src/User")

const station1 = "picadilly"
const station2 = "victoria"


// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter(station1)
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {

  let scooter;
  let user;

  // tests here!
  beforeEach(() => {
  scooter = new Scooter(station2)
  user = new User("Eloise", "mypassword", 24)
  })

  // rent method
  test("should be able to rent a scooter", () => {
    scooter.rent(user);
    expect(scooter.station).toBe(null);
    expect(scooter.checkedOutUser).toBe(user);
  })

  test("should give an error message if the scooter has less than 20% charge", () => {
    scooter.charge = 15;
    expect(() => scooter.rent(user)).toThrow("scooter needs to charge");
  })

  test("should give an error message if the scooter is broken", () => {
    scooter.isBroken = true;
    expect(() => scooter.rent(user)).toThrow("scooter needs repair");
  })

  // dock method

  test("should dock the scooter back at a station", () => {
    scooter.rent(user);
    scooter.dock(station1);
    expect(scooter.station).toBe(station1);
    expect(scooter.checkedOutUser).toBe(null);
  })

  // requestRepair method

  // charge method

})
