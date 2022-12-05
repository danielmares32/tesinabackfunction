import { Usuarios } from "./Usuarios";
import { Proveedores } from "./Proveedores";
import { ProductosOrdenes } from "./ProductosOrdenes";
export declare class Ordenes {
    id: number;
    status: string | null;
    fecha: Date | null;
    notas: string | null;
    idUsuario: number | null;
    idProveedor: number | null;
    idProductosOrdenes: number | null;
    total: number | null;
    idUsuario2: Usuarios;
    idProveedor2: Proveedores;
    idProductosOrdenes2: ProductosOrdenes;
}
