import { CreateUserDto } from "/opt/nodejs/node_modules/src/domain/dtos/CreateUserDto";
import UserEntity from "/opt/nodejs/node_modules/src/domain/entities/UserEntity";

export default interface IUserRepository {
  createUser(data: CreateUserDto): Promise<UserEntity>;
}