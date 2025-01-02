import UserRepository from "/opt/nodejs/node_modules/src/infra/repositories/UserRepository";
import CreateUserService from "/opt/nodejs/node_modules/src/app/services/CreateUserService"
import InMemoryDbAdapter from "/opt/nodejs/node_modules/src/infra/dbAdapters/InMemoryDBAdapter";
import UserEntity from "/opt/nodejs/node_modules/src/domain/entities/UserEntity";

export async function handle(event: any, context: any) {
  var dbAdapter = new InMemoryDbAdapter<UserEntity>();
  var userRepository = new UserRepository(dbAdapter);
  var service = new CreateUserService(userRepository);

  await service.execute(event.body);

  return true;
}