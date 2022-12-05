import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/entities/Usuarios';
import { UsuariosDTO } from 'src/usuarios/dto/usuarios.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Console } from 'console';

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(Usuarios) private readonly usuarioRepositorio: Repository<Usuarios>){}
    findUsuarios(){
        return this.usuarioRepositorio.find();
    }
    findUsuario(user:UsuariosDTO){
        console.log("El usuario que llega es: " + JSON.stringify(user));
        return this.usuarioRepositorio.find({
          where: {
            email:user.email
          }}).then(async (data:any)=>{
            console.log(data);
            let tempUser = data[0];
            console.log("Encrypted: " + tempUser.password);
            console.log("Plain Text: " + user.password);
            const isPasswordMatching = await bcrypt.compare(user.password,tempUser.password);
            console.log(isPasswordMatching);
            if(isPasswordMatching){
                return JSON.stringify(tempUser);
            } else {
                return JSON.stringify({message:"Usuario O Contraseña Incorrecto"});
            }
          }); 
        
    }
    async createUser(createUsuario:UsuariosDTO){
        const passwordInPlaintext = createUsuario.password;
        const hash = await bcrypt.hash(passwordInPlaintext, 10);
        createUsuario.password = hash;
        const newUser = this.usuarioRepositorio.create(createUsuario);
        return this.usuarioRepositorio.save(newUser);
    }
}
