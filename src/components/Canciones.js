import React from 'react'

export default class Canciones extends React.Component {

    constructor(){
        super()
        this.state = {
            canciones : []
        }
    }

    componentDidMount(){
        fetch(`https://album-pg.herokuapp.com/album/${this.props.id_album}/canciones`)
        .then(response => response.json())
        .then(json => this.setState({canciones: json}))
    }
    
         

    render(){
        return (
        <div>
            <h3>Este es el id {this.props.id_album}</h3>
        <ul className="list-group">
            {this.state.canciones.map(cancion =>(
                <li className="list-group-item" key={cancion.id_cancion}>
                    {cancion.titulo_cancion}
                    <button className="btn btn-sm btn-primary float-right">Play</button>
                </li>
            ))}
            
        </ul>
        </div>
        )
    }
}