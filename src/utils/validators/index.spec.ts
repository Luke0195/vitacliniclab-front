import { validateConditional } from './index'
describe('Validator', () => {
  test('Should returns true if isValid return true', () => {
    const result = validateConditional(true)
    expect(result).toBe(true)
  })

  test('Should returns false if isValid return false', () => {
    const result = validateConditional(false)
    expect(result).toBe(false)
  })
})
