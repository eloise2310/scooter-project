const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })

  // test password
  test("password should be a string", () => {
    expect(typeof user.showPassword()).toBe("string")
  })

  // test age
  test("age should be a number", () => {
    expect(typeof user.age).toBe("number")
  })

  // test login
  test("that the password is correct", () => {
    user.login("test123");
    expect(user.loggedIn).toBe(true);
  })

  test("that the login fails if password is incorrect", () => {
    expect(() => user.login("123test")).toThrow("incorrect password");
  })

  // test logout
  test("if loggedIn is false, user should be logged out", () => {
    user.logout()
    expect(user.loggedIn).toBe(false)
  })


})

// test login





// test logout
