import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {

        // Añadir el nombre de la definición que se tiene
        async seasonsList( _: void, __: any, { dataSources } ) {

            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons // Traido de la api
            )

        }

    }
};

export default query;