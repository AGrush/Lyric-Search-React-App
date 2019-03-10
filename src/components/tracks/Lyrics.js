import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

class Lyrics extends Component {


    //only need this state stuff here and no where else hence separate state here
    state = {
        track: {},
        lyrics: {}
    }


    componentDidMount() {

        const cors = "https://cors-anywhere.herokuapp.com/";

        axios
          .get(`${cors}https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_AG_KEY}`)

          .then(res => {
            this.setState({ lyrics: res.data.message.body.lyrics });

            return axios.get(`${cors}https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_AG_KEY}`);

          })
          .then(res => {
            this.setState({ track: res.data.message.body.track });

          })
          .catch(err => console.log(err));
          
    }



    render() {
        //es6 destructuring makes other code shorter below
        const { track, lyrics } = this.state
        // console.log(track)
        if(
            track === undefined || 
            lyrics === undefined || 
            Object.keys(track).length === 0 || 
            Object.keys(lyrics).length === 0
        ) {
            return <Spinner />
        } else {
          return <div>
              <Link to="/" className="btn btn-dark btn-sm mb-4">
                Go Back
              </Link>
              <div className="card">
                <h5 className="card-header">
                  {track.track_name} by <span className="text-secondary">
                    {track.artist_name}
                  </span>
                </h5>
                <div className="card-body">
                  <p className="card-text">{lyrics.lyrics_body}</p>
                </div>
              </div>

              <ul className="list-group mt-3">
                <li className="list-group-item">
                  <strong>Album ID</strong>: {track.album_id}
                </li>
                <li className="list-group-item">
                  <strong>Track Rating</strong>: {track.track_rating}
                </li>
                <li className="list-group-item">
                  <strong>Track Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                </li>
                <li className="list-group-item">
                <strong>Explicit</strong>: {track.explicit === 0 ? "No" : "Yes"}
                </li>
                <li className="list-group-item">
                  <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">
                    {track.first_release_date}
                  </Moment>
                </li>
              </ul>
            </div>;
            
        }
        
    }
}

export default Lyrics