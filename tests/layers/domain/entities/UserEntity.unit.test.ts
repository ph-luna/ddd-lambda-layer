import { describe, expect, it } from 'vitest'
import UserEntity from '../../../../src/domain/entities/UserEntity'
import { CreateUserDto } from '../../../../src/domain/dtos/CreateUserDto'

describe('UserEntity', () => {
  it('should instantiate a user when correct dto is provided', () => {
    const input: CreateUserDto = {
      email: 'any@mail.com',
      password: 'any-password',
      name: 'any-name',
    }

    const sut = new UserEntity(input)

    expect(sut.Id).toBe('1')
    expect(sut.Email).toBe('any@mail.com')
    expect(sut.Password).toBe('any-password')
    expect(sut.Name).toBe('any-name')
  })
})
