import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/Users"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string) {
        //verificar se usuario existe

        const userExists = await this.usersRepository.findOne({
            email
        })

        //se existir, retornar user

        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user);

        //Se não existir, salvar no BD

        return user;
    }
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });

        return user;
    }
}

export { UsersService }