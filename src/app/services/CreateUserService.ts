import { CreateUserDto } from "/opt/nodejs/node_modules/src/domain/dtos/CreateUserDto";
import UserEntity from "/opt/nodejs/node_modules/src/domain/entities/UserEntity";
import IUserRepository from "/opt/nodejs/node_modules/src/domain/interfaces/IUserRepository";

export default class CreateUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(data: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.createUser(data)
  }
}