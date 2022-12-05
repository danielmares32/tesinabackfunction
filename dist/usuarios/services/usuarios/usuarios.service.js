"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Usuarios_1 = require("../../../entities/Usuarios");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepositorio) {
        this.usuarioRepositorio = usuarioRepositorio;
    }
    findUsuarios() {
        return this.usuarioRepositorio.find();
    }
    findUsuario(user) {
        console.log("El usuario que llega es: " + JSON.stringify(user));
        return this.usuarioRepositorio.find({
            where: {
                email: user.email
            }
        }).then(async (data) => {
            console.log(data);
            let tempUser = data[0];
            console.log("Encrypted: " + tempUser.password);
            console.log("Plain Text: " + user.password);
            const isPasswordMatching = await bcrypt.compare(user.password, tempUser.password);
            console.log(isPasswordMatching);
            if (isPasswordMatching) {
                return JSON.stringify(tempUser);
            }
            else {
                return JSON.stringify({ message: "Usuario O Contraseña Incorrecto" });
            }
        });
    }
    async createUser(createUsuario) {
        const passwordInPlaintext = createUsuario.password;
        const hash = await bcrypt.hash(passwordInPlaintext, 10);
        createUsuario.password = hash;
        const newUser = this.usuarioRepositorio.create(createUsuario);
        return this.usuarioRepositorio.save(newUser);
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Usuarios_1.Usuarios)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map