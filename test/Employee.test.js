const Employee = require('../lib/Employee')

const Luke = new Employee('Luke', '8', 'lukemobob@gmail.com')

// test properties 
describe('Test to see if Employee values work', () => {
  const { name, id, email, github } = Luke
  
  it('check Name', () => { expect(name).toBe('Luke') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('lukemobob@gmail.com') })
})

// test methods 
describe('Test to see if Employee methods work', () => {
  it('check Name', () => {
    const callName = Luke.getName();
    expect(callName).toBe('Luke')
  })

  it('check ID', () => {
    const callId = Luke.getId();
    expect(callId).toBe('8')
  })

  it('check Email', () => {
    const callEmail = Luke.getEmail();
    expect(callEmail).toBe('lukemobob@gmail.com')
  })

  it('check role', () => {
    const role = Luke.getRole()
    expect(role).toBe('Employee')
  })
})