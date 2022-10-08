const { Soucet, Rozdil, Soucin, Podil } = require('./script')

test('sečte čísla a porovná', () => {
  expect(Soucet(3, 2)).toBe(5)
  expect(Soucet(0, 2)).toBe(2)
})
test('odečte čísla a porovná', () => {
  expect(Rozdil(3, 2)).toBe(1)
  expect(Rozdil(0, 2)).toBe(-2)
})
test('vynásobí čísla a porovná', () => {
  expect(Soucin(3, 2)).toBe(6)
  expect(Soucin(0, 2)).toBe(0)
})
test('vydělí čísla a porovná', () => {
  expect(Podil(4, -2)).toBe(-2)
  expect(Podil(2, 2)).toBe(1)
})
