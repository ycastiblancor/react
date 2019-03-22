import React , {Component} from 'react';

class ChatRoom extends Component{
    
    constructor(){
        super();
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);

        this.state={
            message:'',
             messages:[
            /*
                {id: 0, text: 'hola'},
                {id: 1, text: 'que tal'}            
            */
            ]
    
        } 
    }

    //componentDidMount: se encarga de poder tomar los datos desde Firebase y rellenarlos dentro de la lista messages:[]
    //Se ejecuta apenas el componente sea montado: mostrado por pantalla. Primordial para rellenar los datos
    componentDidMount(){
        //escuchar datos insertados a la BD en "tiempo real"
        //Obtner mensajes actuales: currentMessages

        firebase.database().ref('messages/').on('value', snapshot =>{
            const currentMessages = snapshot.val();
            //Si tiene datos la BD y es <> de null
            if(currentMessages !=null){
                //actualiza el arreglo de mensajes
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }
    updateMessage(e){
        //console.log(e.target.value)
        this.setState({
            message: e.target.value
        });
        //console.log(this.state.message);
    }

    submitMessage(){
        const message ={
            id: this.state.messages.length,
            text: this.state.message
        };

        firebase.database().ref('messages/' + message.id).set(message);

       /**  
       let listMessages = this.state.messages;
        listMessages.push(message);
        this.setState({
            message: listMessages
        });
        */
        this.setState({message: ''})
        
        
    }

    render(){
        const currentMessages = this.state.messages.map((message, i) =>{ 
            return (
                <li 
                key={message.id} 
                className="list-group-item  list-group-item-action">
                {message.text}
                </li>
            )
        })


        return (
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {currentMessages}
                    </ul>                    
                </div>
                <div className="card-footer">
                    <input
                    value={this.state.message}
                     onChange={this.updateMessage}
                     type="text" 
                     placeholder="Write a message"
                     className="form-control"
                    />
                    <button 
                    onClick={this.submitMessage}
                    className="btn btn-primary btn-block"
                    >
                    Send Message
                    </button>
                </div>
            </div>

        )
    }
}

export default ChatRoom;