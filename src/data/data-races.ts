
import { F1 } from './data-source';
import { checkYear, roundCheck } from '../lib/utils';


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

        
    async getYearRound( year: string, round: number ) { // Obtener el año de la ronda de la carrera (así esta en el curso, horrible el nombre)

        year = checkYear(year);
        round = roundCheck(round)
        return await this.get(`${ year }/${ round }.json`, {
            cacheOptions: { ttl: 60} // Se mantiene la respuesta en cache por 60 minutos
        });

    }


}