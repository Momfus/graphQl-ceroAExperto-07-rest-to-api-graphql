
import { F1 } from './data-source';


export class RacesData extends F1 {

    constructor() {

        super(); 

    }

    
    async getYear( year: String ) {
        
        const currentYear = new Date().getFullYear(); // Año actual
        
        if( isNaN(+year) || +year < 1950 || +year > currentYear ) { // Comprobar si no es numero, menor a 1950 o mayor al año actual para manejar el error
            year = String(currentYear); // Coloca el año actual en caso de erroy  convierte a string el mismo
        }

        return await this.get(`${ year }.json`, {
            cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
        });

    }


}