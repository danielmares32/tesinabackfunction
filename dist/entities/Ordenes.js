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
exports.Ordenes = void 0;
const typeorm_1 = require("typeorm");
const Usuarios_1 = require("./Usuarios");
const Proveedores_1 = require("./Proveedores");
const ProductosOrdenes_1 = require("./ProductosOrdenes");
let Ordenes = class Ordenes {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Ordenes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "status", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Ordenes.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "fecha", nullable: true }),
    __metadata("design:type", Date)
], Ordenes.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "notas", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Ordenes.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_usuario", nullable: true }),
    __metadata("design:type", Number)
], Ordenes.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_proveedor", nullable: true }),
    __metadata("design:type", Number)
], Ordenes.prototype, "idProveedor", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_productos_ordenes", nullable: true }),
    __metadata("design:type", Number)
], Ordenes.prototype, "idProductosOrdenes", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { name: "total", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Ordenes.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuarios_1.Usuarios, (usuarios) => usuarios.ordenes, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "id_usuario", referencedColumnName: "id" }]),
    __metadata("design:type", Usuarios_1.Usuarios)
], Ordenes.prototype, "idUsuario2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Proveedores_1.Proveedores, (proveedores) => proveedores.ordenes, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "id_proveedor", referencedColumnName: "id" }]),
    __metadata("design:type", Proveedores_1.Proveedores)
], Ordenes.prototype, "idProveedor2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductosOrdenes_1.ProductosOrdenes, (productosOrdenes) => productosOrdenes.ordenes, { onDelete: "NO ACTION", onUpdate: "NO ACTION" }),
    (0, typeorm_1.JoinColumn)([{ name: "id_productos_ordenes", referencedColumnName: "id" }]),
    __metadata("design:type", ProductosOrdenes_1.ProductosOrdenes)
], Ordenes.prototype, "idProductosOrdenes2", void 0);
Ordenes = __decorate([
    (0, typeorm_1.Index)("id_usuario", ["idUsuario"], {}),
    (0, typeorm_1.Index)("id_proveedor", ["idProveedor"], {}),
    (0, typeorm_1.Index)("id_productos_ordenes", ["idProductosOrdenes"], {}),
    (0, typeorm_1.Entity)("ordenes", { schema: "tiendaproveedores" })
], Ordenes);
exports.Ordenes = Ordenes;
//# sourceMappingURL=Ordenes.js.map