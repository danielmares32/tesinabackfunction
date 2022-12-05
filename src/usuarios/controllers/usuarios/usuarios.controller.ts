import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuariosDTO } from 'src/usuarios/dto/usuarios.dto';
import { UsuariosService } from 'src/usuarios/services/usuarios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService){}
    @Get('')
    getUsuarios(){
        return this.usuariosService.findUsuarios();
    }
    @Post('')
    getUsuario(@Body() userDto: UsuariosDTO){
        console.log(userDto);
        return this.usuariosService.findUsuario(userDto);
    }
    @Post('create')
    @UsePipes(ValidationPipe)
    addUsuarios(@Body() createUserDto: UsuariosDTO){
        return this.usuariosService.createUser(createUserDto);
    }
}
