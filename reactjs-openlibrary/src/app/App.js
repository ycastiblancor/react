import React, { Component } from 'react';
import Heading from './Heading';
import Row from './Row';

import { format } from 'timeago.js';
//const timeagoInstance = timeago();



class Headings extends Component {
    render() {
        return (
            <thead className="table-success">
                <tr>
                    {
                        //recorrer la propiedad headings definida en index.js
                        this.props.headings.map((heading, i) => {
                            //retornar el valor de esta nueva variable heading que contiene el dato de los headings recorridos
                            //return <th key={i}>{heading}</th>

                            //Segunda parte: Ahora como mi pedazo de head está en un componente llamado Heading, aqui lo llamo:
                            return <Heading key={i} heading={heading} />
                        })
                    }
                </tr>
            </thead>
        )
    }
}

class Rows extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.data.map((row, j) => {

                        /* return <tr key={j}>
                            <td>{row.when}</td>
                            <td>{row.who}</td>
                            <td>{row.description}</td>
                        </tr> */

                        //Segunda parte: Ahora como mi pedazo de body está en un componente llamado Row, aqui lo llamo:
                        return <Row key={j} change={row} />
                    })
                }
            </tbody>
        )
    }

}

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    //Peticion a la API (Cuando el componente es montado)
    componentDidMount() {

        //Se ejecutará lo contenido en esta función cada 1 segundo.
        setInterval(async() => {

            //toma una direccion en internet, retorna un json
            //codigo asincrono, no sabemos cuando va a tardar, depende de la conexion 
            //async-await: siguiente peticion f etch tomará algo de tiempo, una vez termine, seguiremos con la siguiente línea de código
            const response = await fetch('http://openlibrary.org/recentchanges.json?limit=10');
            //console.log(response);
            const data = await response.json();
            const formatData = this.formatData(data);
            console.log(formatData);
            this.setState({ data: formatData })

        }, 1000);
    }

    formatData(data) {
        return data.map((data, i) => {
            return {
                "when": format(data.timestamp),
                "who": data.author.key,
                "description": data.comment
            }
        });
    }


    render() {
        console.log(this.props.headings)
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <Headings headings={this.props.headings} />
                    <Rows data={this.state.data} />

                </table>
            </div>
        )
        //<h1>{this.props.title}</h1>//lo que quiero pintar en pantalla
    }
}
//usarlo en toda la aplicación
export default App;
