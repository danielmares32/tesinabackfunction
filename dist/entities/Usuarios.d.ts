import { Ordenes } from "./Ordenes";
import { Proveedores } from "./Proveedores";
export declare class Usuarios {
    id: number;
    email: string | null;
    password: string | null;
    nombre: string | null;
    telefono: string | null;
    calle: string | null;
    numero: number | null;
    cp: number | null;
    ordenes: Ordenes[];
    proveedores: Proveedores[];
}
