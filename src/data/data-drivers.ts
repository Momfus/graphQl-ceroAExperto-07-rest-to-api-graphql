import { F1 } from './data-source';


export class DriversData extends F1 {

    constructor() {

        super(); 

    }

    // Obtener las temporadas de F1
    async getDrivers() {

        return await this.get('drivers.json?limit=1000', {
            cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
        });

    }


}