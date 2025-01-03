import { describe, expect, it } from 'vitest'
import { handle as CreateUserFunctionHandler } from '../../functions/CreateUserFunction'
import { CreateUserDto } from '../../src/domain/dtos/CreateUserDto'

describe('CreateUserFunction', () => {
  it('should create a new user', async () => {
    const event: { body: CreateUserDto } = {
      body: {
        email: 'any@mail.com',
        password: 'any-password',
        name: 'any-name'
      }
    }
    const context = {}

    const output = await CreateUserFunctionHandler(event, context)

    expect(output).toBe(true)
  })

  it('should throw when body does not contain a valid user dto', async () => {
    const event = {
      body: undefined
    }
    const context = {}

    const output = await CreateUserFunctionHandler(event, context)

    expect(output).toBe(true)
  })
})
