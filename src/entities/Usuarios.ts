import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ordenes } from "./Ordenes";
import { Proveedores } from "./Proveedores";

@Entity("usuarios", { schema: "tiendaproveedores" })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", { name: "nombre", nullable: true, length: 255 })
  nombre: string | null;

  @Column("varchar", { name: "telefono", nullable: true, length: 255 })
  telefono: string | null;

  @Column("varchar", { name: "calle", nullable: true, length: 255 })
  calle: string | null;

  @Column("int", { name: "numero", nullable: true })
  numero: number | null;

  @Column("int", { name: "cp", nullable: true })
  cp: number | null;

  @OneToMany(() => Ordenes, (ordenes) => ordenes.idUsuario2)
  ordenes: Ordenes[];

  @OneToMany(() => Proveedores, (proveedores) => proveedores.idUsuario2)
  proveedores: Proveedores[];
}
