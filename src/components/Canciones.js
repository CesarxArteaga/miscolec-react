import React from 'react'

export default class Canciones extends React.Component {

    constructor(){
        super()
        this.state = {
            canciones : []
        }

        this.playing = this.playing.bind(this)
    }

    componentDidMount(){
        fetch(`https://album-pg.herokuapp.com/album/${this.props.id_album}/canciones`)
        .then(response => response.json())
        .then(json => this.setState({canciones: json}))
    }
    
    playing(cancion){
        alert(`Playing => ${cancion}`)
    }

    render(){
        return (
        <div>
            <h3>Este es el id {this.props.id_album}</h3>
        <ul className="list-group">
            {this.state.canciones.map(cancion =>(
                <li className="list-group-item" key={cancion.id_cancion}>
                    {cancion.titulo_cancion}
                    <button className="btn btn-sm btn-primary float-right" onClick={()=>this.playing(cancion.titulo_cancion)}>Play</button>
                </li>
            ))}
            
        </ul>
        </div>
        )
    }
}