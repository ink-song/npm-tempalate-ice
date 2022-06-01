class Person {
  constructor(name: string) {
    this.name = name
  }

  eat() {
    return `${this.name}在吃饭`
  }
}

export default Person
