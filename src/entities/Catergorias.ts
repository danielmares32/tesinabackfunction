import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./Productos";

@Entity("catergorias", { schema: "tiendaproveedores" })
export class Catergorias {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 255 })
  nombre: string | null;

  @Column("varchar", { name: "descripcion", nullable: true, length: 255 })
  descripcion: string | null;

  @OneToMany(() => Productos, (productos) => productos.idCategoria2)
  productos: Productos[];
}
