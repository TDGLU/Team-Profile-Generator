const Intern = require('../lib/Intern')

const Luke = new Intern('Luke', '8', 'lukemobob@gmail.com', 'UCR')

// test properties 
describe('check if Intern Values work', () => {
  const { name, id, email, school } = Luke
  
  it('check Name', () => { expect(name).toBe('Luke') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('lukemobob@gmail.com') })

  it('check school', () => { expect(school).toBe('UCR') })
})

// test methods 
describe('check if Intern Methods work', () => {
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
    const callSchool = Luke.getSchool();
    expect(callSchool).toBe('UCR')
  })

  it('check role', () => {
    const role = Luke.getRole()
    expect(role).toBe('Intern')
  })
})