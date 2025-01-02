import { CreateUserDto } from "/opt/nodejs/node_modules/src/domain/dtos/CreateUserDto"

export default class UserEntity {
  private _id: string
  private _name: string
  private _email: string
  private _password: string

  constructor(dto: CreateUserDto) {
    this._id = "1"
    this._name = dto.name
    this._email = dto.email
    this._password = dto.password
  }

  public get Id() { 
    return this._id 
  };

  public get Name(): string {
    return this._name
  }

  public get Email(): string {
    return this._email
  }

  public get Password(): string {
    return this._password
  }
}