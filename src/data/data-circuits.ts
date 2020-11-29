import { F1 } from './data-source';

export class CircuitData extends F1 {

    constructor() {

        super(); 

    }

    // Obtener las temporadas de F1
    // async getSeasons() {

    //     return await this.get('seasons.json?limit=80', {
    //         cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
    //     });

    // }


}