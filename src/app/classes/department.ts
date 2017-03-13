import {Departamento} from "../swagger/co/stackpointer/adn/model/Departamento";
import {Pais} from "../swagger/co/stackpointer/adn/model/Pais";
export class Department implements Departamento{
    id: string;
    nombre: string;
    pais: Pais;
}