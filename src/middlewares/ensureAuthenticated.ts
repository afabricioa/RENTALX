import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    //Bearer tokendiuasdhiusahudihasu
    const authHeader = request.headers.authorization;
    console.log(authHeader)
    if(!authHeader) {
        throw new Error("Token missing!");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "projetoIgnite") as IPayload;
        console.log("decoded: ", user_id);

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id)
        console.log("user: ", user);

        if(!user){
            throw new Error("Usuário não existe!");
        }
        
        next();
    } catch (error) {
        console.log(error)
        throw new Error("token inválido");
    }
}