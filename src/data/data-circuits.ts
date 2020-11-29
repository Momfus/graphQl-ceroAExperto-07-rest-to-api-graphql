import { paginationOptions } from '../lib/utils';
import { F1 } from './data-source';

export class CircuitData extends F1 {

    constructor() {

        super(); 

    }

    async getCircuits( pageElements: number = -1, page: number = 1 ) {
        
        if( pageElements === -1 ) {
            return await this.get('circuits.json?limit=1000', {
                cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
            });
        }

        
        return await this.get(`circuits.json?${paginationOptions(pageElements, page)}`, {
            cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
        });

    }

}