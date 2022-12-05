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
exports.Productos = void 0;
const typeorm_1 = require("typeorm");
const Proveedores_1 = require("./Proveedores");
const Catergorias_1 = require("./Catergorias");
const ProductosOrdenes_1 = require("./ProductosOrdenes");
let Productos = class Productos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Productos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_proveedor", nullable: true }),
    __metadata("design:type", Number)
], Productos.prototype, "idProveedor", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nombre", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Productos.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { name: "precio", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Productos.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_categoria", nullable: true }),
    __metadata("design:type", Number)
], Productos.prototype, "idCategoria", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "descripcion", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Productos.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "imagen_ruta", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Productos.prototype, "imagenRuta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Proveedores_1.Proveedores, (proveedores) => proveedores.productos, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "id_proveedor", referencedColumnName: "id" }]),
    __metadata("design:type", Proveedores_1.Proveedores)
], Productos.prototype, "idProveedor2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Catergorias_1.Catergorias, (catergorias) => catergorias.productos, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "id_categoria", referencedColumnName: "id" }]),
    __metadata("design:type", Catergorias_1.Catergorias)
], Productos.prototype, "idCategoria2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductosOrdenes_1.ProductosOrdenes, (productosOrdenes) => productosOrdenes.idProducto2),
    __metadata("design:type", Array)
], Productos.prototype, "productosOrdenes", void 0);
Productos = __decorate([
    (0, typeorm_1.Index)("id_proveedor", ["idProveedor"], {}),
    (0, typeorm_1.Index)("id_categoria", ["idCategoria"], {}),
    (0, typeorm_1.Entity)("productos", { schema: "tiendaproveedores" })
], Productos);
exports.Productos = Productos;
//# sourceMappingURL=Productos.js.map