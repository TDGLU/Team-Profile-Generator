const Manager = require('../lib/Manager')

const Luke = new Manager('Luke', '8', 'lukemobob@gmail.com', '123')

// test properties 
describe('check if Manager Values work', () => {
  const { name, id, email, officeNumber } = Luke
  
  it('check Name', () => { expect(name).toBe('Luke') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('lukemobob@gmail.com') })

  it('check officeNumber', () => { expect(officeNumber).toBe('123') })
})

// test methods 
describe('check if Manager Methods work', () => {
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

  it('check School', () => {
    const callOfficeNum = Luke.getOfficeNum();
    expect(callOfficeNum).toBe('123')
  })

  it('check role', () => {
    const role = Luke.getRole();
    expect(role).toBe('Manager')
  })
})