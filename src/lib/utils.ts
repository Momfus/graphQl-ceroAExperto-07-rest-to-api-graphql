export function getWikipediaMobileUrl( url: string ) {

    // Transforma donde diga wikipedia por la versión mobile de m.wikipedia (al estar definido)
    return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia'): '';

}

export function checkYear( year: string ) {

            
    const currentYear = new Date().getFullYear(); // Año actual
        
    if( isNaN(+year) || +year < 1950 || +year > currentYear ) { // Comprobar si no es numero, menor a 1950 o mayor al año actual para manejar el error
        year = String(currentYear); // Coloca el año actual en caso de erroy  convierte a string el mismo
    }

    return year;

}

export function roundCheck( round:number ) {

    if( round >= 100 ) {

        return 1;

    }

    return round;

}

export function paginationOptions( pageElements: number, page: number) {
    const offset = (page - 1) * pageElements; // Obtener la cantidad de elementos segun la pagina y cantidad de elementos
    const limit = pageElements;
    return `limit=${limit}&offset=${offset}`;
}