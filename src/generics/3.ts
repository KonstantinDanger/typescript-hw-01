function merge<T extends object, Y extends object>(objA: T, objB: Y): T & Y {
  return Object.assign({}, objA, objB)
}
