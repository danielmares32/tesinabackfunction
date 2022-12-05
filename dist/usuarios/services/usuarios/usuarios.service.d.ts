import { Usuarios } from 'src/entities/Usuarios';
import { UsuariosDTO } from 'src/usuarios/dto/usuarios.dto';
import { Repository } from 'typeorm';
export declare class UsuariosService {
    private readonly usuarioRepositorio;
    constructor(usuarioRepositorio: Repository<Usuarios>);
    findUsuarios(): Promise<Usuarios[]>;
    findUsuario(user: UsuariosDTO): Promise<string>;
    createUser(createUsuario: UsuariosDTO): Promise<Usuarios>;
}
