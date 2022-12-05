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
exports.Proveedores = void 0;
const typeorm_1 = require("typeorm");
const Ordenes_1 = require("./Ordenes");
const Productos_1 = require("./Productos");
const Usuarios_1 = require("./Usuarios");
let Proveedores = class Proveedores {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Proveedores.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_usuario", nullable: true }),
    __metadata("design:type", Number)
], Proveedores.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "rfc", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Proveedores.prototype, "rfc", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nombre_empresa", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Proveedores.prototype, "nombreEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "calle", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Proveedores.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "numero", nullable: true }),
    __metadata("design:type", Number)
], Proveedores.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "cp", nullable: true }),
    __metadata("design:type", Number)
], Proveedores.prototype, "cp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Ordenes_1.Ordenes, (ordenes) => ordenes.idProveedor2),
    __metadata("design:type", Array)
], Proveedores.prototype, "ordenes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Productos_1.Productos, (productos) => productos.idProveedor2),
    __metadata("design:type", Array)
], Proveedores.prototype, "productos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuarios_1.Usuarios, (usuarios) => usuarios.proveedores, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "id_usuario", referencedColumnName: "id" }]),
    __metadata("design:type", Usuarios_1.Usuarios)
], Proveedores.prototype, "idUsuario2", void 0);
Proveedores = __decorate([
    (0, typeorm_1.Index)("id_usuario", ["idUsuario"], {}),
    (0, typeorm_1.Entity)("proveedores", { schema: "tiendaproveedores" })
], Proveedores);
exports.Proveedores = Proveedores;
//# sourceMappingURL=Proveedores.js.map