import React from 'react'
import Canciones from './Canciones'

export default class Albumes extends React.Component {

    constructor () {
        super()
        this.state = {
            albumes : []
        }
    }

    componentDidMount(){
        fetch('https://album-pg.herokuapp.com/albumes')
        .then(response => response.json())
        .then(json => this.setState({albumes: json}))
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                {this.state.albumes.map(album=>(
                    <div className="col-sm-4" key={album.id_album}>
                    <div className="card mt-2" >
                    <div className="card-body">
                        <h3>{album.titulo_album}</h3>
                        <Canciones id_album={album.id_album}></Canciones>
                    </div>
                    </div>
                </div>
            ))}
            </div>
            </div>
        )
    }
}