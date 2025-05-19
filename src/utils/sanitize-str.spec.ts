import { sanitizeStr } from "./sanitize-str"


describe('SanitizeStr (unit)', () => {
  it('should return an empty string if the value is falsy', () => {
    //@ts-expect-error testing function without param
    expect(sanitizeStr()).toBe('')
  })

  it('should return as empty string if the value is !== from string', () => {
    //@ts-expect-error testing function by passing a number as the value
    expect(sanitizeStr(1)).toBe('')
  })

  it('should return the normalized value', ()=> {
    const anyString = ' Batata 1 '
    expect(sanitizeStr(anyString)).toBe('Batata 1')
  })

  it('should be able to normalized value with NFC pattern', () => {
    const original = 'e\u0301'
    const expected = 'é'
    expect(expected).toBe(sanitizeStr(original))
  })
})
