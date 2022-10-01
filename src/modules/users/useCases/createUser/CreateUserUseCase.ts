import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const isExistingUser = this.usersRepository.findByEmail(email);
    if (isExistingUser) {
      throw new Error("Email inválido");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
