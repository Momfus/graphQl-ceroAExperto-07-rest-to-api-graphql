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
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => parent.givenName.concat(' ').concat(parent.familyName), // Se el nombre completo con los atributos concatenados de la api
        urlMobile: parent => getWikipediaMobileUrl( parent.url )
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getWikipediaMobileUrl( parent.url )
    }

};

export default type;