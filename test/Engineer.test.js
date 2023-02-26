const Engineer = require('../lib/Engineer')

const Luke = new Engineer('Luke', '8', 'lukemobob@gmail.com', 'TDGLuke')

// test properties 
describe('check if Engineer Values work', () => {
  const { name, id, email, github } = Luke
  
  it('check Name', () => { expect(name).toBe('Luke') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('lukemobob@gmail.com') })

  it('check Github', () => { expect(github).toBe('TDGLU') })
})

// test methods 
describe('check if Engineer Methods work', () => {
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

  it('check Github', () => {
    const callGithub = Luke.getGithub()
    expect(callGithub).toBe('TDGLuke')
  })

  it('check role', () => {
    const role = Luke.getRole()
    expect(role).toBe('Engineer')
  })
})