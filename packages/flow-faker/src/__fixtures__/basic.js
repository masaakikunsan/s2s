// @flow
type Age = number

type User = {
  id: number,
  name: string,
  age: ?Age,
  sex?: string,
}

let defaultUser: User

type Info = {
  user: User,
  users: Array<User>,
  union: string | number,
  isOk: boolean,
}

let info: Info

function getUser(id: number): User {
  return { id, name: 'unknown', age: 20 }
}

type NoParam = any
let noParam: NoParam
