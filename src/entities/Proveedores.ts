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
import { Usuarios } from "./Usuarios";

@Index("id_usuario", ["idUsuario"], {})
@Entity("proveedores", { schema: "tiendaproveedores" })
export class Proveedores {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_usuario", nullable: true })
  idUsuario: number | null;

  @Column("varchar", { name: "rfc", nullable: true, length: 255 })
  rfc: string | null;

  @Column("varchar", { name: "nombre_empresa", nullable: true, length: 255 })
  nombreEmpresa: string | null;

  @Column("varchar", { name: "calle", nullable: true, length: 255 })
  calle: string | null;

  @Column("int", { name: "numero", nullable: true })
  numero: number | null;

  @Column("int", { name: "cp", nullable: true })
  cp: number | null;

  @OneToMany(() => Ordenes, (ordenes) => ordenes.idProveedor2)
  ordenes: Ordenes[];

  @OneToMany(() => Productos, (productos) => productos.idProveedor2)
  productos: Productos[];

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.proveedores, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_usuario", referencedColumnName: "id" }])
  idUsuario2: Usuarios;
}
