import { Proveedores } from "./Proveedores";
import { Catergorias } from "./Catergorias";
import { ProductosOrdenes } from "./ProductosOrdenes";
export declare class Productos {
    id: number;
    idProveedor: number | null;
    nombre: string | null;
    precio: number | null;
    idCategoria: number | null;
    descripcion: string | null;
    imagenRuta: string | null;
    idProveedor2: Proveedores;
    idCategoria2: Catergorias;
    productosOrdenes: ProductosOrdenes[];
}
