import { randomUUID } from "crypto"
import { Replace } from "src/utils/replace"


interface UserSchema {
  email: string
  password: string
  name: string
  createdAt?: Date
}
export class User {
  props: UserSchema
  _id: string

  // o replace foi criado para tornarmos a opção de createdAt como opcional ao fazer uma requisição.
  constructor(props: Replace<UserSchema, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date()
    }
    this._id = id || randomUUID()
  }
  //gets and sets 
  get id(): string {
    return this._id
  }
  get email(): string {
    return this.props.email
  }
  set email(email: string) {
    this.props.email = email
  }
  get password(): string {
    return this.props.password
  }
  set password(password: string) {
    this.props.password = password
  }
  get name(): string {
    return this.props.name
  }
  set name(name: string) {
    this.props.name = name
  }
  get createdAt(): Date | undefined {
    return this.props.createdAt
  }
} 