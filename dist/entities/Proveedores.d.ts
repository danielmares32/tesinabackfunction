import { Ordenes } from "./Ordenes";
import { Productos } from "./Productos";
import { Usuarios } from "./Usuarios";
export declare class Proveedores {
    id: number;
    idUsuario: number | null;
    rfc: string | null;
    nombreEmpresa: string | null;
    calle: string | null;
    numero: number | null;
    cp: number | null;
    ordenes: Ordenes[];
    productos: Productos[];
    idUsuario2: Usuarios;
}
