
import { RESTDataSource } from 'apollo-datasource-rest';


export class F1 extends RESTDataSource {

    constructor() {

        super(); // Llamar al constructor de RESTDataSource (el padre)

        // Sobre escribir el baseURL
        this.baseURL = 'https://ergast.com/api/f1/'

    }


}