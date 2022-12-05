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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const typeorm_1 = require("typeorm");
const Ordenes_1 = require("./Ordenes");
const Proveedores_1 = require("./Proveedores");
let Usuarios = class Usuarios {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Usuarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Usuarios.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "password", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Usuarios.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nombre", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Usuarios.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "telefono", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Usuarios.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "calle", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Usuarios.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "numero", nullable: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "cp", nullable: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "cp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Ordenes_1.Ordenes, (ordenes) => ordenes.idUsuario2),
    __metadata("design:type", Array)
], Usuarios.prototype, "ordenes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Proveedores_1.Proveedores, (proveedores) => proveedores.idUsuario2),
    __metadata("design:type", Array)
], Usuarios.prototype, "proveedores", void 0);
Usuarios = __decorate([
    (0, typeorm_1.Entity)("usuarios", { schema: "tiendaproveedores" })
], Usuarios);
exports.Usuarios = Usuarios;
//# sourceMappingURL=Usuarios.js.map