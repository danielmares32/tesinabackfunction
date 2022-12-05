import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuarios } from "./Usuarios";
import { Proveedores } from "./Proveedores";
import { ProductosOrdenes } from "./ProductosOrdenes";

@Index("id_usuario", ["idUsuario"], {})
@Index("id_proveedor", ["idProveedor"], {})
@Index("id_productos_ordenes", ["idProductosOrdenes"], {})
@Entity("ordenes", { schema: "tiendaproveedores" })
export class Ordenes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("datetime", { name: "fecha", nullable: true })
  fecha: Date | null;

  @Column("varchar", { name: "notas", nullable: true, length: 255 })
  notas: string | null;

  @Column("int", { name: "id_usuario", nullable: true })
  idUsuario: number | null;

  @Column("int", { name: "id_proveedor", nullable: true })
  idProveedor: number | null;

  @Column("int", { name: "id_productos_ordenes", nullable: true })
  idProductosOrdenes: number | null;

  @Column("double", { name: "total", nullable: true, precision: 22 })
  total: number | null;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.ordenes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_usuario", referencedColumnName: "id" }])
  idUsuario2: Usuarios;

  @ManyToOne(() => Proveedores, (proveedores) => proveedores.ordenes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_proveedor", referencedColumnName: "id" }])
  idProveedor2: Proveedores;

  @ManyToOne(
    () => ProductosOrdenes,
    (productosOrdenes) => productosOrdenes.ordenes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "id_productos_ordenes", referencedColumnName: "id" }])
  idProductosOrdenes2: ProductosOrdenes;
}
