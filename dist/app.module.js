"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const Catergorias_1 = require("./entities/Catergorias");
const Ordenes_1 = require("./entities/Ordenes");
const Productos_1 = require("./entities/Productos");
const ProductosOrdenes_1 = require("./entities/ProductosOrdenes");
const Proveedores_1 = require("./entities/Proveedores");
const Usuarios_1 = require("./entities/Usuarios");
const chat_entity_1 = require("./entities/chat.entity");
const app_gateway_1 = require("./app.gateway");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'tienda-uaa.mysql.database.azure.com',
                port: 3306,
                username: 'daniel',
                password: 'password1.0',
                database: 'tiendaproveedores',
                entities: [Catergorias_1.Catergorias, Ordenes_1.Ordenes, Productos_1.Productos, ProductosOrdenes_1.ProductosOrdenes, Proveedores_1.Proveedores, Usuarios_1.Usuarios, chat_entity_1.Chat],
                synchronize: true,
            }), typeorm_1.TypeOrmModule.forFeature([chat_entity_1.Chat]), usuarios_module_1.UsuariosModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_gateway_1.AppGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map