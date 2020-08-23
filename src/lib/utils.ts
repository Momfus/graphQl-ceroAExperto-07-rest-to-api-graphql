export function getWikipediaMobileUrl( url: string ) {

    // Transforma donde diga wikipedia por la versión mobile de m.wikipedia (al estar definido)
    return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia'): '';

}