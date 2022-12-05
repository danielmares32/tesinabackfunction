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
exports.ProductosOrdenes = void 0;
const typeorm_1 = require("typeorm");
const Ordenes_1 = require("./Ordenes");
const Productos_1 = require("./Productos");
let ProductosOrdenes = class ProductosOrdenes {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], ProductosOrdenes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_producto", nullable: true }),
    __metadata("design:type", Number)
], ProductosOrdenes.prototype, "idProducto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Ordenes_1.Ordenes, (ordenes) => ordenes.idProductosOrdenes2),
    __metadata("design:type", Array)
], ProductosOrdenes.prototype, "ordenes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Productos_1.Productos, (productos) => productos.productosOrdenes, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "id_producto", referencedColumnName: "id" }]),
    __metadata("design:type", Productos_1.Productos)
], ProductosOrdenes.prototype, "idProducto2", void 0);
ProductosOrdenes = __decorate([
    (0, typeorm_1.Index)("id_producto", ["idProducto"], {}),
    (0, typeorm_1.Entity)("productos_ordenes", { schema: "tiendaproveedores" })
], ProductosOrdenes);
exports.ProductosOrdenes = ProductosOrdenes;
//# sourceMappingURL=ProductosOrdenes.js.map