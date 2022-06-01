import Person from '../index'
test('a person eating', () => {
  expect(new Person('ice')).toBe('ice 在吃饭')
})
