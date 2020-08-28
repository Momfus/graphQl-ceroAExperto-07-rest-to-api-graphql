import { IResolvers } from 'graphql-tools';
import { dataSources } from '../data/index';

const query: IResolvers = {
    Query: {

        // Añadir el nombre de la definición que se tiene
        async seasonsList( _: void, __: any, { dataSources } ) {

            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons // Traido de la api
            );

        },

        // Consultar carreras en un año específico
        async racesByYear( _: void, { year }, {dataSources} ) {

            return await dataSources.races.getYear( year ).then(
                (data: any) => data.MRData.RaceTable.Races // Traido de la api
            );

        }

    }
};

export default query;