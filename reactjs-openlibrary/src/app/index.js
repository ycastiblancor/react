    import "@babel/polyfill";
    
    import React, {Component} from 'react';
	import ReactDOM, {render}from 'react-dom';
    
    import App from './App';
    import data from  './data.json';
    
    
    //console.log(data);
        
    //Para reemplazar React.Component, puedo importar directamente el componente:
    //import {Component} from 'react'
    //lo uso directamente como Component y no React.Component, igual para ReactDOM.render
   
    // comento este bloque ya que app/App.js es ahora mi nuevo componente; 
    //para poder usar este componente y que se reconozca como tal, debo importarlo 
    //import App from './App';
    /*  class App extends Component{
		render(){
			return <h1>App</h1>//lo que quiero pintar en pantalla
		}
     } */
     
    
    
    //Metodo render() nos permite pintar cosas por pantalla
	//Uso código jsx
    const headings =['When', 'Who', 'Description'];
    //agregar componente App creado arriba
    render(
        <App data={data} title='OpenLibrary API' headings={headings}/>,
        document.getElementById('app')
	)