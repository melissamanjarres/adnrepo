import {Pais} from "../swagger/co/stackpointer/adn/model/Pais";
export class Country implements Pais{
    id: string;
    nombre: string;
 
    constructor(id){
        this.id = id;
    }
}