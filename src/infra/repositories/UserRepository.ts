import { DBAdapter } from '/opt/nodejs/node_modules/src/infra/interfaces/DBAdapter'
import { CreateUserDto } from '/opt/nodejs/node_modules/src/domain/dtos/CreateUserDto'
import UserEntity from '/opt/nodejs/node_modules/src/domain/entities/UserEntity'
import IUserRepository from '/opt/nodejs/node_modules/src/domain/interfaces/IUserRepository'

export default class UserRepository implements IUserRepository {
  constructor(private readonly dbAdapter : DBAdapter<UserEntity>) {}

  public async createUser(data: CreateUserDto): Promise<UserEntity> {
    const user = new UserEntity(data)
    return await this.dbAdapter.save(user)
  }
}
