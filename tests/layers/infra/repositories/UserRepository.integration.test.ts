import { beforeAll, beforeEach, describe, expect, it, Mocked, vi } from 'vitest'
import UserEntity from '/opt/nodejs/node_modules/src/domain/entities/UserEntity'
import { CreateUserDto } from '../../../../src/domain/dtos/CreateUserDto'
import UserRepository from '../../../../src/infra/repositories/UserRepository'
import { DBAdapter } from '../../../../src/infra/interfaces/DBAdapter'

describe('UserRepository', () => {
  let dbAdapter: Mocked<DBAdapter<UserEntity>>
  let mockedUser: UserEntity
  let input: CreateUserDto
  let sut: UserRepository

  beforeAll(() => {
    input = {
      email: 'any@mail.com',
      password: 'any-password',
      name: 'any-name',
    }
    mockedUser = new UserEntity(input)
    dbAdapter = {
      save: vi.fn().mockResolvedValue(mockedUser),
    }
  })

  beforeEach(() => {
    vi.clearAllMocks()

    sut = new UserRepository(dbAdapter)
  })

  describe('createUser', () => {
    it('should return created user instance on success', async () => {
      const output = await sut.createUser(input)

      expect(output).toEqual(mockedUser)
    })
  })
})
