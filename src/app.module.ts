import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Catergorias } from './entities/Catergorias';
import { Ordenes } from './entities/Ordenes';
import { Productos } from './entities/Productos';
import { ProductosOrdenes } from './entities/ProductosOrdenes';
import { Proveedores } from './entities/Proveedores';
import { Usuarios } from './entities/Usuarios';
import { Chat } from './entities/chat.entity';
import { AppGateway } from './app.gateway';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'tienda-uaa.mysql.database.azure.com',
    port: 3306,
    username: 'daniel',
    password: 'password1.0',
    database: 'tiendaproveedores',
    entities: [Catergorias, Ordenes, Productos, ProductosOrdenes, Proveedores, Usuarios, Chat],
    synchronize: true,
  }),TypeOrmModule.forFeature([Chat]), UsuariosModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
