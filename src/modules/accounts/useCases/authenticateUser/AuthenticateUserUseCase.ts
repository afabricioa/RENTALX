import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse{
    user: {
        name: string,
        email: string
    },
    token: string;
}
@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse>{
        //se usuario existe
        const user = await this.usersRepository.findByEmail(email)
        
        if(!user){
            throw new Error("Email ou senha incorreta!");
        }

        const passwordMatch = await compare(password, user.password);

        //se senha ta correta
        if(!passwordMatch){
            throw new Error("Email ou senha incorreta!");
        }

        //se correta criar webtoken
        //primeiro parametro é o payload com algumas informações como permissões, nome usuário, sem info critica(senha)
        const token = sign({}, "projetoIgnite", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn
    }
}

export { AuthenticateUserUseCase }