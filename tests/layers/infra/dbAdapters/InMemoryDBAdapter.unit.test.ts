import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import UserEntity from '../../../../src/domain/entities/UserEntity'
import InMemoryDbAdapter from '../../../../src/infra/dbAdapters/InMemoryDBAdapter'

describe('InMemoryDBAdapter', () => {
  let mockedUser: UserEntity
  let sut: InMemoryDbAdapter<any>

  beforeAll(() => {
    mockedUser = new UserEntity({
      email: 'any@mail.com',
      password: 'any-password',
      name: 'any-name',
    })
  })

  beforeEach(() => {
    vi.clearAllMocks()

    sut = new InMemoryDbAdapter()
  })

  describe('save', () => {
    it.each([mockedUser, { any: 'property' }])('should return received input on success', async (input) => {
      const output = await sut.save(input)

      expect(output).toEqual(input)
    })
  })
})
