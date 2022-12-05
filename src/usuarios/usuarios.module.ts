import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from 'src/entities/Usuarios';
import { UsuariosController } from './controllers/usuarios/usuarios.controller';
import { UsuariosService } from './services/usuarios/usuarios.service';

@Module({
  imports: [Usuarios, TypeOrmModule.forFeature([Usuarios])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
