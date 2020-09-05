
import { F1 } from './data-source';
import { checkYear } from '../lib/utils';


export class RacesData extends F1 {

    constructor() {

        super(); 

    }

    
    async getYear( year: string ) {

        year = checkYear(year);
        return await this.get(`${ year }.json`, {
            cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
        });

    }


}