import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Proveedores } from "./Proveedores";
import { Catergorias } from "./Catergorias";
import { ProductosOrdenes } from "./ProductosOrdenes";

@Index("id_proveedor", ["idProveedor"], {})
@Index("id_categoria", ["idCategoria"], {})
@Entity("productos", { schema: "tiendaproveedores" })
export class Productos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_proveedor", nullable: true })
  idProveedor: number | null;

  @Column("varchar", { name: "nombre", nullable: true, length: 255 })
  nombre: string | null;

  @Column("double", { name: "precio", nullable: true, precision: 22 })
  precio: number | null;

  @Column("int", { name: "id_categoria", nullable: true })
  idCategoria: number | null;

  @Column("varchar", { name: "descripcion", nullable: true, length: 255 })
  descripcion: string | null;

  @Column("varchar", { name: "imagen_ruta", nullable: true, length: 255 })
  imagenRuta: string | null;

  @ManyToOne(() => Proveedores, (proveedores) => proveedores.productos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_proveedor", referencedColumnName: "id" }])
  idProveedor2: Proveedores;

  @ManyToOne(() => Catergorias, (catergorias) => catergorias.productos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_categoria", referencedColumnName: "id" }])
  idCategoria2: Catergorias;

  @OneToMany(
    () => ProductosOrdenes,
    (productosOrdenes) => productosOrdenes.idProducto2
  )
  productosOrdenes: ProductosOrdenes[];
}
