import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {

    // Mapear el tipo de respuesta con lo que se desea traer
    Season: {

        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl( parent.url )

    }

};

export default type;