import { isValid } from './index'
describe('Validator', () => {
  test('Should returns true if isValid return true', () => {
    const result = isValid(true)
    expect(result).toBe(true)
  })

  test('Should returns false if isValid return false', () => {
    const result = isValid(false)
    expect(result).toBe(false)
  })
})
