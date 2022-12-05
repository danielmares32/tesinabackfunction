import { Ordenes } from "./Ordenes";
import { Productos } from "./Productos";
export declare class ProductosOrdenes {
    id: number;
    idProducto: number | null;
    ordenes: Ordenes[];
    idProducto2: Productos;
}
