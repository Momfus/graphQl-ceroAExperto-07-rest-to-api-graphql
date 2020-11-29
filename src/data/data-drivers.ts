import { F1 } from './data-source';


export class DriversData extends F1 {

    constructor() {

        super(); 

    }

    // Obtener las temporadas de F1
    async getDrivers( pageElements: number = -1, page: number = 1 ) {

        if( pageElements === -1 ) {
            return await this.get('drivers.json?limit=1000', {
                cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
            });
        }

        const offset = (page - 1) * pageElements; // Obtener la cantidad de elementos segun la pagina y cantidad de elementos
        const limit = pageElements;
        const filter = `limit=${limit}&offset=${offset}`;
        return await this.get(`drivers.json?${filter}`, {
            cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
        });

    }


}