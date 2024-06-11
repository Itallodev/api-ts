import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/UserRepository";
import { User } from "../../entities/user";
import { hash } from "bcrypt";

// Criação de usuário em princípio do SOLID

interface CreateUserRequest {
  email: string
  name: string
  password: string
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ email, name, password }: CreateUserRequest) {
    const user = new User({
      email,
      name,
      password: await hash(password, 10)
    })
    await this.userRepository.create(user)

    return user;
  }
}

// após conclusão, realizar teste unitário createUserUsecase.spec.ts


