class App extends React.Component {
    clickHandler(){
        alert('It works')
    }
    render() {
        return (
        <button onClick={() => this.clickHandler()}>Click</button>
        )
    }
}


let template = "<h1>Hello World</h1>";

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);