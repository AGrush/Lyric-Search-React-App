import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Track from '../tracks/Track'

 class Tracks extends Component {
  render() {
    return (
        //Context API CONSUMER allows us to use values from PROVIDER
      <Consumer>
          {
            value => {

              //destructure to shorten calls: const {track_list, heading} = value;

              if(value.track_list === undefined || value.track_list.length === 0){
                return <Spinner />
              } else{
                return (

                    <React.Fragment>
                        <h3 className="text-center mb-4">{value.heading}</h3>
                        <div className="row">
                            {value.track_list.map(item => (
                                <Track key={item.track.track_id} track={item.track}/>
                            ))}
                        </div>
                    </React.Fragment>
                    
                )
              }
            //   return <h1>Tracks</h1>
            }
          }
      </Consumer>
    )
  }
}

export default Tracks