import React from 'react'
import { Link } from 'react-router-dom'

export default function Track(props) {

  return (
    <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                  <h5>{props.track.artist_name}</h5>
                  <p className="card-text">
                    <strong><i className="fas fa-play"></i>Track</strong>: {props.track.track_name}<br />
                    <strong><i className="fas fa-compact-disc"></i>Album</strong>: {props.track.album_name}<br />
                  </p>
                  {/* passed through in the search bar */}
                  <Link to={`lyrics/track/${props.track.track_id}`} className="btn btn-dark btn-block">
                  <i className="fas fa-chevron-right"></i>View Lyrics
                  </Link>
            </div>
        </div>
    </div>
  )
}
