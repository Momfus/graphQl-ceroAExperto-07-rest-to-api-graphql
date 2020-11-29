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

        },

        async raceSelect( _: void, { year, round }, { dataSources } ) {

            return await dataSources.races.getYearRound( year, round ).then(
                (data: any) => data.MRData.RaceTable.Races[0] // Traido de la api
            );

        },

        async historyDrivers( _: void, {pageElement, page}: any, { dataSources } ) {

            return await dataSources.drivers.getDrivers(pageElement, page).then(
                (data: any) => data.MRData.DriverTable.Drivers // Traido de la api
            );

        },

        async driversYear(_: void, { year }, { dataSources } ) {
            return await dataSources.drivers.getDriversByYear(year).then(
                (data: any) => data.MRData.DriverTable.Drivers // Traido de la api
            );
        },

        async driversYearAndRound(_: void, { year, round }, {dataSources}) {

            return await dataSources.drivers.getDriversByYearAndRound(year, round).then(
                (data: any) => data.MRData.DriverTable.Drivers // Traido de la api
            )

        }

    }
};

export default query;