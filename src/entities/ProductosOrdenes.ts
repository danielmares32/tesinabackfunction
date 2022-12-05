import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ordenes } from "./Ordenes";
import { Productos } from "./Productos";

@Index("id_producto", ["idProducto"], {})
@Entity("productos_ordenes", { schema: "tiendaproveedores" })
export class ProductosOrdenes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_producto", nullable: true })
  idProducto: number | null;

  @OneToMany(() => Ordenes, (ordenes) => ordenes.idProductosOrdenes2)
  ordenes: Ordenes[];

  @ManyToOne(() => Productos, (productos) => productos.productosOrdenes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_producto", referencedColumnName: "id" }])
  idProducto2: Productos;
}
