import { F1 } from './data-source';
import { checkYear, roundCheck } from '../lib/utils';


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

    // Obtener los conductores por año
    async getDriversByYear( year: string ) {
        year = checkYear(year);
        return await this.get(String(year).concat('/drivers.json'),
            {
                cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
            }
        );
    }

    // Obtener los conductores por año y carrera concreta
    async getDriversByYearAndRound( year: string, round: number ) {
        year = checkYear(year);
        round = roundCheck(round);
        return await this.get(String(year).concat(`/${round}`).concat('/drivers.json'),
            {
                cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
            }
        );
    }

    // Obtener un piloto en especifico por id
    async getDriver( id: string ) {

        return await this.get(`/drivers/${id}.json`,
            {
                cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
            }
        );

    }

    // Obtener temporadas por rankings de pilotos
    async getSeasonsPilotsRanking(year: string) {
        year = checkYear(year);
        return await this.get(String(year).concat('/driverStandings.json'),
            {
                cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
            }
        );
    }


}