function merge<T, Y>(objA: T, objB: Y): T & Y {
  return Object.assign({}, objA, objB)
}
