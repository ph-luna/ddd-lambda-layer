import { beforeAll, beforeEach, describe, expect, it, Mocked, vi } from 'vitest'
import UserEntity from '../../../../src/domain/entities/UserEntity'
import { CreateUserDto } from '../../../../src/domain/dtos/CreateUserDto'
import CreateUserService from '../../../../src/app/services/CreateUserService'
import IUserRepository from '../../../../src/domain/interfaces/IUserRepository'

describe('CreateUserService', () => {
  let mockedUserRepository: Mocked<IUserRepository>
  let mockedUser: UserEntity
  let input: CreateUserDto
  let sut: CreateUserService

  beforeAll(() => {
    input = {
      email: 'any@mail.com',
      password: 'any-password',
      name: 'any-name',
    }
    mockedUser = new UserEntity(input)
    mockedUserRepository = {
      createUser: vi.fn().mockResolvedValue(mockedUser)
    }
  })

  beforeEach(() => {
    vi.clearAllMocks()

    sut = new CreateUserService(mockedUserRepository)
  })

  it('should rethrow when create user repository throws', async () => {
    mockedUserRepository.createUser.mockRejectedValueOnce(new Error('any-error'))
    const promise = sut.execute(input)

    await expect(promise).rejects.toThrow(new Error('any-error'))
  })

  it('should call create user repository with correct input', async () => {
    await sut.execute(input)

    expect(mockedUserRepository.createUser).toHaveBeenCalledWith(input)
    expect(mockedUserRepository.createUser).toHaveBeenCalledOnce()
  })

  it('should return created user instance on success', async () => {
    const output = await sut.execute(input)

    expect(output).toEqual(mockedUser)
  })
})
