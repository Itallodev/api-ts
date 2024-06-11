// Nessa etapa, nós vamos criar um UserRepository fake para simular um banco de dados e realizarmos os testes
// Esse DB será em memória, então vamos para UserRepositoryInMemory.ts
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { CreateUserUseCase } from "./createUserUseCase"

let userRepositoryInMemory: UserRepositoryInMemory
let createUserUseCase: CreateUserUseCase
describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
  })
  it('Pronto para criar usuário', async () => {
    expect(userRepositoryInMemory.users).toEqual([])

    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'Luffy',
      password: '1234'
    })
    expect(userRepositoryInMemory.users).toEqual([user])
  })
})