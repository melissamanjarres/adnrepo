import {Injectable} from "@angular/core";

@Injectable()
export class QuoteService{
    quotes = [
        {
            'quote': 'El éxito es la suma de pequeños esfuerzos repetidos día tras día',
            'author': 'Roger Vizcaino'
        },
        {
            'quote': 'Proponerse objetivos es el primer paso de convertir lo invisible en visible',
            'author': 'Alvaro Araujo'
        },
        {
            'quote': 'Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso',
            'author': 'Thomas A. Edison'
        },
        {
            'quote': 'La diferencia entre lo posible y lo imposible está en la determinación de una persona',
            'author': 'Mohammed Ali'
        },
        {
            'quote': 'La educación es el arma más poderosa que puedes usar para cambiar el mundo',
            'author': 'Mike Tyson'
        },
        {
            'quote': 'Si puedes imaginarlo puedes lograrlo, si puedes soñarlo, puedes hacerlo realidad',
            'author': 'Albert Einstein'
        },
        {
            'quote': 'Si no estás dispuesto a arriesgar tendrás que conformarte con lo ordinario',
            'author': 'Steve Jobs'
        },
        {
            'quote': 'Las oportunidades en los negocios son como los autobuses, siempre hay otra por venir',
            'author': 'Bill Gates'
        }
    ];

    rnd: number;

    constructor(){
        this.rnd = Math.floor(Math.random() * this.quotes.length);
    }

    getQuote() : Object {
        return {index: this.rnd, quote: this.quotes[this.rnd].quote, author: this.quotes[this.rnd].author};
    }
}