import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {

    // Mapear el tipo de respuesta con lo que se desea traer
    Season: {

        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl( parent.url )

    },
    Race: { // Resolver al obtener algun dato nulo (como pasa en el name)
    
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaMobileUrl( parent.url )

    },
    Circuit: { // Resolver al obtener algun dato nulo

        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => getWikipediaMobileUrl( parent.url )

    },
    Location:  {
        lng: parent => parent.long
    }

};

export default type;